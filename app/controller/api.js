'use strict';

const Controller = require('egg').Controller;
const {
    regExp
} = require('../enums/regexp');
const moment = require('moment');
const uuid = require('uuid');
const {
    WeatherUpdateTime,
    LoginType
} = require('../enums/api');
const {
    fillString
} = require('../utils/string');
const svgCaptcha = require('svg-captcha');

module.exports = class Api extends Controller {

    /**
     * 注册接口 post  注册即代表登陆，注册用户的跳转由前台控制
     * 必选参数   
     * 可选参数
     */
    async register() {
        let result = {
            status: -1,
            success: false,
            msg: ''
        }

        try {
            let ctx = this.ctx,
                params = ctx.request.body;

            // 是否已经登陆  
            if (ctx.session && ctx.session.user && ctx.session.user.Id && ctx.session.user.length !== 0) {
                result.status = 30004;
                result.msg = '您已登陆';
                ctx.body = result;
                return;
            }

            // 参数判断
            if (!params || typeof params !== 'object' ||
                !params.userTypeId || typeof params.userTypeId !== 'string' || params.userTypeId.length === 0) {
                result.status = 30001;
                result.msg = '参数错误';
                ctx.body = result;
                return;
            }

            let loginType = await ctx.service.lwVisitorType.getById(params.userTypeId);
            // 用户输入不存在的注册类型，是否需要记录其IP地址，TODO
            if (!loginType || typeof loginType !== 'object' ||
                !loginType.Id || loginType.Id.length === 0 || loginType.Id !== params.userTypeId) {
                result.status = 30003;
                result.msg = '不存在的注册类型';
                ctx.body = result;
                return;
            }

            // 登陆类型    1: 游客   2: 注册用户    10: 系统邀请用户 TODO
            if (Number(loginType.Name) === LoginType.register) {
                // 注册用户需要检查手机号(正则验证 TODO) 、密码（任意）、登录名（可选，默认同手机号,前期先不做，不让其填写）、图片验证码
                if (!params.mobile || params.mobile.length === 0 || isNaN(Number(params.mobile)) ||
                    !params.password || typeof params.password !== 'string' || params.password.length === 0 ||
                    !params.code || typeof params.code !== 'string' || params.code.length === 0 ||
                    params.code.toLowerCase() !== ctx.session.imgCode
                ) {
                    result.status = 30005;
                    result.msg = '注册信息参数有误';
                    ctx.body = result;
                    return;
                }
                // 判断用户是否已经注册
                let userInfo = await this.ctx.service.lwVisitor.getByMobile(params.mobile);
                if (userInfo && userInfo.Id && userInfo.Id.length !== 0 && userInfo.Mobile === params.mobile) {
                    result.status = 30006;
                    result.msg = `用户${params.mobile}已经注册，请登陆...`;
                    ctx.body = result;
                    return;
                }
            }

            // 前期先由系统自动递增分配用户名
            let userName = '';
            let lastOne = await ctx.service.lwVisitor.getLastOne(loginType.Id);
            if (lastOne && lastOne.Id && lastOne.Id.length !== 0) {
                let order = Number(lastOne.Name.match(regExp.getUserOrder)[1]) + 1;
                userName = fillString(order, Number(loginType.MaxLen), loginType.FillByte);
            } else {
                userName = fillString(1, Number(loginType.MaxLen), loginType.FillByte);
            }
            userName = loginType.Prefix + '{' + userName + '}' + loginType.Suffix;

            // 进一步检验用户输入的是否含有脚本注入的风险关键字   TODO
            // 密码加密   TODO

            let now = new Date(),
                userId = uuid.v4(),
                userEntity = {
                    Id: userId,
                    UserTypeId: loginType.Id,
                    Name: userName,
                    Mobile: params.mobile,
                    Password: params.password || 'lw_123456',
                    LandTime: now,
                    IsAuto: 1,
                    Valid: 1,
                    CreateTime: now,
                    CreatePerson: 'system'
                }
            let createEntity = await ctx.service.lwVisitor.create(userEntity);

            if (!createEntity || !createEntity.Id || createEntity.Id.length === 0) {
                result.status = 30007;
                result.msg = '网络繁忙，请稍后在试';
                ctx.body = result;
                return;
            }

            // 注册成功
            result.status = 200;
            result.success = true;

            // 验证完毕清除ctx.session.imgCode
            ctx.session.imgCode = null;

            // 写入缓存
            ctx.session.user = {
                Id: userId,
                Name: userName.replace(regExp.repalceUserSign, '')
            }

            // 写入用户日志
            let options = {
                UserId: userId,
                Remark: 'register'
            }
            try {
                await ctx.service.lwVisitorLogs.createByOptions(options);
            } catch (error) {
                ctx.logger.error('写入注册log错误：' + error);
            }
        } catch (error) {
            this.ctx.logger.error('controller/api/register' + error);
            result.status = 500;
            result.msg = '服务端错误，联系管理员';
        }
        this.ctx.body = result;
    }

    /**
     * 登陆接口  post
     */
    async login() {
        let result = {
            status: -1,
            success: false,
            msg: ''
        }

        try {
            let ctx = this.ctx,
                params = ctx.request.body;

            // 参数检查   userTypeId、mobile（正则  TODO）、code、password
            if (!params || typeof params !== 'object' ||
                // !params.userTypeId || params.userTypeId.length === 0 ||
                !params.mobile || params.mobile.length === 0 ||
                // !params.code || params.code.length === 0 ||  
                !params.password || params.password.length === 0) {
                result.status = 30001;
                result.msg = '参数错误';
                ctx.body = result;
                return;
            }

            // if (params.code.toLowerCase() !== ctx.session.ImgCode) {
            //     result.status = 30003;
            //     result.msg = '验证码错误';
            //     ctx.body = result;
            //     return;
            // }


            // 检验登陆类型
            // let loginType = await ctx.service.lwVisitorType.getById(params.userTypeId);
            // // 判断是否为注册过的用户
            // if (!loginType || typeof loginType !== 'object' ||
            //     !loginType.Id || loginType.Id.length === 0 ||
            //     Number(loginType.Name) !== LoginType.register) {
            //     result.status = 30005;
            //     result.msg = '登陆类型错误';
            //     ctx.body = result;
            //     return;
            // }

            let userEntity = await ctx.service.lwVisitor.getByMobile(params.mobile);

            if (!userEntity || !userEntity.Id || userEntity.Id.length === 0) {
                result.status = 30007;
                result.msg = '用户不存在';
                ctx.body = result;
                return;
            }

            if (params.password !== userEntity.Password) {
                result.status = 30009;
                result.msg = '登陆密码错误';
                ctx.body = result;
                return;
            }

            // 登陆成功
            result.status = 200;
            result.success = true;

            // 写入缓存
            ctx.session.user = {
                Id: userEntity.Id,
                Name: userEntity.Name.replace(regExp.repalceUserSign, '')
            }
            // ctx.session.ImgCode = null;

            // 写入用户日志
            let options = {
                UserId: userEntity.Id,
                Remark: 'login'
            }
            try {
                await ctx.service.lwVisitorLogs.createByOptions(options);
            } catch (error) {
                ctx.logger.error('写入登陆log错误：' + error);
            }
        } catch (error) {
            this.ctx.logger.error('controller/api/login' + error);
            result.status = 500;
            result.msg = '服务端错误，联系管理员';
            this.ctx.body = result;
        }
        this.ctx.body = result;
    }

    /**
     * method: get
     * 通过请求城市编码获取天气
     */
    async getWeatherAndPosition() {
        let result = {
            status: -1,
            success: false,
            msg: '',
            weather: '',
            temperature: 0
        };

        try {
            let ctx = this.ctx,
                ip = ctx.ip,
                userId = '';

            if (!ctx.session || !ctx.session.user || !ctx.session.user.Id || ctx.session.user.length === 0) {
                result.status = 30001;
                result.msg = '登录超时请重新登录';
                ctx.body = result;
                return;
            }
            userId = ctx.session.user.Id;

            // TODO 
            ip = '113.97.35.74';

            if (!ip || !regExp.IPv4.test(ip)) {
                result.status = 30003;
                result.msg = "IP地址有误";
                ctx.body = result;
                return;
            }

            let addressEntity = await ctx.service.lwWeather.getPositionByIP(ip);
            if (!addressEntity || Number(addressEntity.status) !== 1 || !addressEntity.province ||
                !addressEntity.city || !addressEntity.adcode) {
                result.msg = '暂无法获取IP所在地';
                result.status = 30005;
                ctx.body = result;
                return;
            }

            let localWeatherEntity = await ctx.service.lwWeather.getLastByAdcode(addressEntity.adcode);
            // 一定时间内去更新  moment可以不加 true ,不用很精确的三小时
            if (localWeatherEntity && localWeatherEntity.Id && localWeatherEntity.Id.length !== 0 &&
                localWeatherEntity.CreateTime && moment().diff(localWeatherEntity.CreateTime, "seconds") < WeatherUpdateTime) {
                result.status = 200;
                result.success = true;
                result.weather = localWeatherEntity.Weather;
                result.temperature = localWeatherEntity.Temperature;
                ctx.body = result;
                return;
            }

            // 调用接口获取最新实况天气
            let lastWeather = await ctx.service.lwWeather.getWeatherByadcode(addressEntity.adcode);
            if (!lastWeather || Number(lastWeather.status) !== 1 || !lastWeather.lives || lastWeather.lives.length === 0) {
                result.msg = '暂无法获取实时天气情况';
                result.status = 30007;
                ctx.body = result;
                return;
            }

            // 写入天气数据
            let weather = lastWeather.lives[0];
            result.status = 200;
            result.success = true;
            result.weather = weather['weather'];
            result.temperature = weather['temperature'];

            // 将最新获取的天气写入数据库
            let weatherEntity = {
                Id: uuid.v4(),
                Province: addressEntity.province,
                City: addressEntity.city,
                AdCode: addressEntity.adcode,
                Weather: weather['weather'],
                Temperature: weather['temperature'],
                WindDirection: weather['winddirection'],
                WindPower: weather['windpower'],
                ReportTime: weather['reporttime'],
                Valid: 1,
                CreateTime: new Date(),
                CreatePerson: 'sysauto'
            };
            let createEntity = await ctx.service.lwWeather.create(weatherEntity);
            if (!createEntity || !createEntity.Id || createEntity.Id.length === 0) {
                ctx.logger.info('controller/api/getWeatherAndPosition' + '写入天气数据失败');
            }

        } catch (err) {
            this.ctx.logger.error('controller/api/getWeatherAndPosition' + err);
            result.status = 500;
            result.msg = '网络异常，请稍后重试';
        }
        this.ctx.body = result;
    }

    /**
     * 获取图片验证码 get
     */
    async getCode() {
        try {
            let code = svgCaptcha.create({
                // 翻转颜色
                inverse: false,
                // 验证码字符中排除 0o1i
                ignoreChars: '0o1i',
                // 字体大小
                fontSize: 40,
                // 噪声线条数
                noise: 2,
                // 宽度
                width: 80,
                // 高度
                height: 35,
                color: false
            });
            // 保存到session，忽略大小写
            this.ctx.session.imgCode = code.text.toLocaleLowerCase();

            this.ctx.body = {
                status: 200,
                msg: '',
                success: true,
                data: code.data
            }
        } catch (error) {
            this.ctx.logger.error('controller/api/getCode' + error);
            this.ctx.body = {
                status: 500,
                success: false,
                msg: '获取图片验证码失败',
                data: null
            }
        }
    }



}