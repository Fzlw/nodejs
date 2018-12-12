'use strict';

/**
 * sysperson
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

module.exports = class SyspersonService extends Service {

    /**
     * create a new sysperson
     * @param {Object} entity  model sysperson
     * @return {Object} entity a model Entity
     */
    async create(entity) {
        if (typeof entity !== 'object') throw new Error('entity must be Object');
        try {
            const result = await this.ctx.model.Sysperson.create(entity);
            return result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get a sysperson entity by Id
     * @param {String} Id guid
     * @return {Object} entity a model Entity
     */
    async getById(Id) {
        if(!Id || typeof Id !== 'string' || Id.length === 0) throw new Error('Id must be string');
        try {
            const result = await this.ctx.model.Sysperson.findOne({
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
     * update a sysperson
     * @param {Object} entity model sysperson
     * @return {Object} newEntity entity a model Entity
     */
    async edit(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            const newEntity = await this.ctx.model.Sysperson.update(entity, {
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
     * remove a record from sysperson
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async remove(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            entity.Valid = 0;
            return await this.ctx.service.sysperson.edit(entity);
        } catch (error) {
            throw error;
        }
    }

    /**
     * delete a record from sysperson
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async delete(entity) {
        try {
            const result = await this.ctx.model.Sysperson.destroy({
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
     * search in sysperson
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

            let entityList = await this.ctx.model.Sysperson.findAndCountAll(condition);
            return entityList;
        } catch (err) {
            throw err;
        }
    }

    /**
     * 获取最新的个人信息
     */
    async getLastOne() {
        try {
            const entity = await this.ctx.model.Sysperson.findOne({
                where: {
                    Valid: 1
                },
                offset: 0,
                limit: 1,
                order: [
                    ['CreateTime', 'Desc']
                ]
            })
            return entity && entity.dataValues;
        } catch (error) {
            console.log('service/sysperson/getLastOne' + error);
        }
    }

}