'use strict';

/**  所有api接口相关的配置   */

// 请求路径
exports.baseUrl = 'https://restapi.amap.com/v3';

// 请求路由
exports.api = {
    weather: 'weather/weatherInfo',
    ip: 'ip'
}

// 高德个人平台Web服务key值
exports.WebServiceKey = "2805cf8fe85759867a9afc4555d24a47";

// 天气更新时间，单位 s
exports.WeatherUpdateTime = 3 * 60 * 60;


// 登陆类型
exports.LoginType = {
    visit: 1,   // 游客
    register: 2,   // 注册用户
    invitation: 10   // 系统邀请用户
}  