'use strict';

const Controller = require('egg').Controller;
const {
    regExp
} = require('../enums/regexp');
const moment = require('moment');
const uuid = require('uuid');
const { WeatherUpdateTime } = require('../enums/api');

module.exports = class Api extends Controller {

    async getWeatherAndPosition() {
        let result = {
            status: -1,
            success: false,
            msg: '',
            weather: '',
            temperature: 0,
            province: '',
            city: '',
            date: moment().format('YYYY年MM月DD日')
        };

        try {
            let ip = this.ctx.ip;
            // test
            ip = '113.97.35.74';
            if (!ip || !regExp.IPv4.test(ip)) {
                result.status = 30001;
                result.msg = "IP地址有误";
                this.ctx.body = result;
                return;
            }
            // 写入ip test
            result.ip = ip; 

            let addressEntity = await this.ctx.service.lwWeather.getPositionByIP(ip);
            if (!addressEntity || Number(addressEntity.status) !== 1 || !addressEntity.province ||
                !addressEntity.city || !addressEntity.adcode) {
                result.msg = '暂无法获取IP所在地';
                result.status = 30002;
                this.ctx.body = result;
                return;
            }
            // 写入地理位置
            result.province = typeof addressEntity.province === 'string' ? addressEntity.province : '';
            result.city = typeof addressEntity.city === 'string' ? addressEntity.city : '';

            let localWeatherEntity = await this.ctx.service.lwWeather.getLastByAdcode(addressEntity.adcode);
            // 一定时间内去更新  moment可以不加 true ,不用很精确的三小时
            if (localWeatherEntity && localWeatherEntity.Id && localWeatherEntity.Id.length !== 0 && 
                localWeatherEntity.CreateTime && moment().diff(localWeatherEntity.CreateTime, "seconds") < WeatherUpdateTime) {
                result.status = 200;
                result.success = true;
                result.weather = localWeatherEntity.Weather;
                result.temperature = localWeatherEntity.Temperature;
                this.ctx.body = result;
                return;
            }

            // 调用接口获取最新实况天气
            let lastWeather = await this.ctx.service.lwWeather.getWeatherByadcode(addressEntity.adcode);
            if (!lastWeather || Number(lastWeather.status) !== 1 || !lastWeather.lives || lastWeather.lives.length === 0) {
                result.msg = '暂无法获取实时天气情况';
                result.success = true;
                result.status = 30200;
                this.ctx.body = result;
                return;
            }

            // 写入天气数据
            result.status = 200;
            result.success = true;
            result.weather = lastWeather.lives[0]['weather'];
            result.temperature = lastWeather.lives[0]['temperature'];
            
            // 将最新获取的天气写入数据库
            let weatherEntity = {
                Id: uuid.v4(),
                Province: addressEntity.province,
                City: addressEntity.city,
                AdCode: addressEntity.adcode,
                Weather: lastWeather.lives[0]['weather'],
                Temperature: lastWeather.lives[0]['temperature'],
                WindDirection: lastWeather.lives[0]['winddirection'],
                WindPower: lastWeather.lives[0]['windpower'],
                ReportTime: lastWeather.lives[0]['reporttime'],
                Valid: 1,
                CreateTime: new Date(),
                CreatePerson: 'sysauto'
            }
            await this.ctx.service.lwWeather.create(weatherEntity);
        } catch (err) {
            console.log('controller/api/getWeatherAndPosition' + err);
            result.status = 500;
            result.msg = '网络异常，请稍后重试';
        }
        this.ctx.body = result;
    }

}