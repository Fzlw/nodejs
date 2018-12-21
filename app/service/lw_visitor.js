'use strict';

/**
 * lwVisitor
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

const uuid = require('uuid');
const {
    fillString
} = require('../utils/string');

module.exports = class LwVisitorService extends Service {

    /**
     * create a new lw_visitor
     * @param {Object} entity  model lw_visitor
     * @return {Object} entity a model Entity
     */
    async create(entity) {
        if (typeof entity !== 'object') throw new Error('entity must be Object');
        try {
            const result = await this.ctx.model.LwVisitor.create(entity);
            return result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get a lw_visitor entity by Id
     * @param {String} Id guid
     * @return {Object} entity a model Entity
     */
    async getById(Id) {
        if (!Id || typeof Id !== 'string' || Id.length === 0) throw new Error('Id must be string');
        try {
            const result = await this.ctx.model.LwVisitor.findOne({
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
     *  get a lw_visitor by condtion
     * @param {Object} where condition
     * @return {Object} entity a model Entity
     */
    async getByCondition(where) {
        if (!where || typeof where !== 'object') {
            throw new Error('param error');
        }
        try {
            return await this.ctx.model.LwVisitor.findOne({
                where: where
            });
        } catch (err) {
            throw err;
        }
    }

    /**
     * update a lw_visitor
     * @param {Object} entity model lw_visitor
     * @return {Object} newEntity entity a model Entity
     */
    async edit(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            const newEntity = await this.ctx.model.LwVisitor.update(entity, {
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
     * remove a record from lw_visitor
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async remove(entity) {
        if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
            throw new Error('entity must be Object');
        }
        try {
            entity.Valid = 0;
            return await this.ctx.service.lwVisitor.edit(entity);
        } catch (error) {
            throw error;
        }
    }

    /**
     * delete a record from lw_visitor
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async delete(entity) {
        try {
            const result = await this.ctx.model.LwVisitor.destroy({
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
     * search in lw_visitor
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

            let entityList = await this.ctx.model.LwVisitor.findAndCountAll(condition);
            return entityList;
        } catch (err) {
            throw err;
        }
    }

    /**
     *  get a cnh_user by mobile
     * @param {String} mobile
     * @return {Object} entity
     */
    async getByMobile(mobile) {
        try {
            const result = this.ctx.model.LwVisitor.findOne({
                where: {
                    Mobile: mobile,
                    Valid: 1
                },
            });
            return result.dataValues || result;
        } catch (err) {
            throw err;
        }
    }

    /**
     * get the last lw_visitor
     */
    async getLastOne(typeId, options) {
        try {
            let whereCon = Object.assign(options || {}, {
                UserTypeId: typeId,
                Valid: 1
            });
            let lastone = await this.ctx.model.LwVisitor.findOne({
                where: whereCon,
                order: [
                    ['CreateTime', 'DESC']
                ]
            });
            return lastone;
        } catch (err) {
            throw err;
        }
    }

    /**
     * 创建用户
     * @param {number} userTypeId  创建用户类型Id
     * @returns {Object} entity 
     */
    async createVisitorAndLog(userTypeId) {

        try {
            let userTypeInfo = await this.ctx.service.lwVisitorType.getById(userTypeId);
            if (!userTypeInfo) {
                console.log('userTypeId is noexist');
                return;
            }

            // 获取最新用户
            let lastUser = await this.ctx.service.lwVisitor.getLastOne(typeId);
            let newUserName = '',
                newUserId = uuid.v4(),
                prefix = userTypeInfo.Prefix,
                suffix = userTypeInfo.Suffix;
            if (!lastUser || !lastUser.Id || lastUser.Id.length === 0) {
                newUserName = fillString(1, userTypeInfo.MaxLen, userTypeInfo.FillByte);
            } else {
                // 只匹配数字部分
                let count = Number(lastUser.Name.match(/.*{\D*(\d+)\D*}.*/)[1]) + 1;
                newUserName = fillString(count, userTypeInfo.MaxLen, userTypeInfo.FillByte);
            }
            newUserName = prefix + '{' + newUserName + '}' + suffix;

            let userEntity = {
                Id: newUserId,
                UserTypeId: userTypeInfo.Id,
                Name: newUserName,
                LandTime: new Date(),
                Valid: 1,
                CreateTime: new Date(),
                CreatePerson: 'sysauto'
            };
            let createUser = await this.ctx.service.lwVisitor.create(userEntity);
            return createUser;
        } catch (err) {
            console.log('app/service/lw_visitor/createVisitor' + err);
        }

    }

}