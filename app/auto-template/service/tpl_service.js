'use strict';

/**
 * __TableName__Service
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

module.exports = class __TableName__ extends Service {

    /**
     * create a new __tablename__
     * @param {Object} entity  model __tablename__
     * @return {Object} entity a model Entity
     */
    create(entity) {
        if (typeof entity !== 'object') throw new Error('entity must be Object');
        try {
            const result = await this.ctx.model.__TableName__.create(entity);
            return result;
        } catch (err) {
            throw err;
        }
    }

    


}