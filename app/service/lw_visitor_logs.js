'use strict';

/**
 * lwVisitorLogs
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

const uuid = require('uuid');

module.exports = class LwVisitorLogsService extends Service {

    /**
     * create a new lw_visitor_logs
     * @param {Object} entity  model lw_visitor_logs
     * @return {Object} entity a model Entity
     */
    async create(entity) {
        if (typeof entity !== 'object') throw new Error('entity must be Object');
        try {
            const result = await this.ctx.model.LwVisitorLogs.create(entity);
            return result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get a lw_visitor_logs entity by Id
     * @param {String} Id guid
     * @return {Object} entity a model Entity
     */
    async getById(Id) {
        if (!Id || typeof Id !== 'string' || Id.length === 0) throw new Error('Id must be string');
        try {
            const result = await this.ctx.model.LwVisitorLogs.findOne({
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
     * update a lw_visitor_logs
     * @param {Object} entity model lw_visitor_logs
     * @return {Object} newEntity entity a model Entity
     */
    async edit(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            const newEntity = await this.ctx.model.LwVisitorLogs.update(entity, {
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
     * remove a record from lw_visitor_logs
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async remove(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            entity.Valid = 0;
            return await this.ctx.service.lwVisitorLogs.edit(entity);
        } catch (error) {
            throw error;
        }
    }

    /**
     * delete a record from lw_visitor_logs
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async delete(entity) {
        try {
            const result = await this.ctx.model.LwVisitorLogs.destroy({
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
     * search in lw_visitor_logs
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

            let entityList = await this.ctx.model.LwVisitorLogs.findAndCountAll(condition);
            return entityList;
        } catch (err) {
            throw err;
        }
    }

    /**
     * 根据必须参数创建实体
     * @param {object} options 
     */
    async createByOptions(options) {

        try {
            let now = new Date(),
                defaultEntity = {
                    Id: uuid.v4(),
                    IP: this.ctx.ip,
                    UserAgent: this.ctx.request.header["user-agent"],
                    Province: '',
                    City: '',
                    LandTime: now,
                    Valid: 1,
                    CreateTime: now,
                    CreatePerson: 'system'
                };
                
            // 获取地理信息
            let {
                Province,
                City
            } = this.ctx.session.user;
            let entity = Object.assign(defaultEntity, options, {
                Province,
                City
            });
            let result = await this.ctx.service.lwVisitorLogs.create(entity);
            return result;
        } catch (error) {
            this.ctx.logger.error('service/lw_visitor_logs/createByOptions' + error);
            throw error;
        }
    }

}