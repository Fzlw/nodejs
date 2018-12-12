'use strict';

/**
 * lwWeather
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;
const { baseUrl, api, WebServiceKey } = require('../enums/api');

module.exports = class LwWeatherService extends Service {

    /**
     * create a new lw_weather
     * @param {Object} entity  model lw_weather
     * @return {Object} entity a model Entity
     */
    async create(entity) {
        if (typeof entity !== 'object') throw new Error('entity must be Object');
        try {
            const result = await this.ctx.model.LwWeather.create(entity);
            return result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get a lw_weather entity by Id
     * @param {String} Id guid
     * @return {Object} entity a model Entity
     */
    async getById(Id) {
        if(!Id || typeof Id !== 'string' || Id.length === 0) throw new Error('Id must be string');
        try {
            const result = await this.ctx.model.LwWeather.findOne({
                where: {
                    Id: Id
                }
            });
            return result.dataValues || result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * update a lw_weather
     * @param {Object} entity model lw_weather
     * @return {Object} newEntity entity a model Entity
     */
    async edit(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            const newEntity = await this.ctx.model.LwWeather.update(entity, {
                where: {
                    Id: entity.Id
                }
            });
            return newEntity.dataValues || newEntity;
        } catch (error) {
            throw error;
        }
    }

    /**
     * remove a record from lw_weather
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async remove(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            entity.Valid = 0;
            return await this.ctx.service.lwWeather.edit(entity);
        } catch (error) {
            throw error;
        }
    }

    /**
     * delete a record from lw_weather
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async delete(entity) {
        try {
            const result = await this.ctx.model.LwWeather.destroy({
                where: {
                    Id: entity.Id
                }
            });
            return result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * search in lw_weather
     * @param {Object} pagination page 
     * @param {Object} where where
     * @param {Object} order order by  
     * @returns {Object} list 
     */
    async search(pagination, where, order) {
        let page = pagination ? pagination.current : 1;
        let pageSize = pagination ? pagination.pageSize : 10;

        // default query
        let whereCon = {
            Valid: 1
        }
        if (where && typeof where === "object") {
            whereCon = Object.assign(whereCon, where)
        }

        //default order
        let orderCon = [
            ['CreateTime', 'Desc']
        ];
        if (order && order.length) {
            orderCon = order.concat(orderCon);
        }

        try {
            let condition = {
                where: where || null,
                order: orderCon
            }

            if (pagination) {
                condition = Object.assign(condition, {
                    offset: (page - 1) * pageSize,
                    limit: pageSize
                })
            }

            let entityList = await this.ctx.model.LwWeather.findAndCountAll(condition);
            return entityList;
        } catch (err) {
            throw err;
        }
    }

    /**
     * 通过城市编码获取最新城市的天气
     * @param {number} adcode 城市编码
     */
    async getLastByAdcode(adcode) {
        try {
            const result = await this.ctx.model.LwWeather.findOne({
                where: {
                    AdCode: adcode
                },
                offset: 0,
                limit: 1,
                order: [
                    ['CreateTime', 'Desc']
                ]
            });
            return result && result.dataValues; 
        } catch (err) {
            console.log('service/lw_weather/getLastByAdcode' + err);
        }
    }

    /**
     * https://lbs.amap.com/api/webservice/guide/api/ipconfig
     * @param {string} ip 客户端请求IP
     */
    async getPositionByIP(ip) {
        try {
            let result = await this.ctx.service.httpclient.get({
                baseUrl: baseUrl,
                api: api.ip,
                data: {
                    key: WebServiceKey,
                    ip: ip
                }
            });
            return result;
        } catch (err) {
            console.log('service/lw_weather/getPositionByIP' + err);
        }
    }

    /**
     * https://lbs.amap.com/api/webservice/guide/api/weatherinfo
     * @param {number} adcode 城市编码
     */
    async getWeatherByadcode(adcode) {
        try {
            let result = await this.ctx.service.httpclient.get({
                baseUrl: baseUrl,
                api: api.weather,
                data: {
                    key: WebServiceKey,
                    city: adcode,
                    extensions: 'base'  // 返回实况天气
                }
            });
            return result;
        } catch (err) {
            console.log('service/lw_weather/getWeatherByadcode' + err);
        }
    }

}