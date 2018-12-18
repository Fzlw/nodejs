'use strict';

module.exports = app => {
    const { controller } = app;
    /**  统一接口存放   */
    // 获取地理位置和天气
    app.router.get('/api/getweather', controller.api.getWeatherAndPosition);
    // 登陆接口
    app.router.post('/login', controller.api.login);
    // 注册接口
    app.router.post('/register', controller.api.register);
}