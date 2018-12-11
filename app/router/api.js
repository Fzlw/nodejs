'use strict';

module.exports = app => {
    const { controller } = app;
    /**  统一接口存放   */
    // 获取地理位置和天气
    app.router.get('/api/getweather', controller.api.getWeatherAndPosition);
}