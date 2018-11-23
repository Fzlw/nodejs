'use strict';

const Faker = require('faker');
const _ = require('lodash');
const Sequelize = require('sequelize');

function randomString(len, _chars) {
    let chars = _chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        charLen = chars.length,
        result = '',
        i = 0;
    while(i < len) {
        result += chars[Math.floor(Math.random() * charLen)];
        i ++;
    }
    return result;
}

exports.getMockData = field => {

    if (!field || typeof field !== 'object') throw new Error('param must be object');


    if (field.type instanceof Sequelize.STRING) {
        if(field.type.options && field.type.options.length){
            if(field.type.options.length === 1) {
                return '"' + 1 + '"';
            }
          
            return '"' + randomString(_.random(1, field.type.options.length / 2)) + '"';
        }
        return '"' + mockFaker.Field.number(1, 10) + '"';
    }

    if (field.type instanceof Sequelize.DATE) {
        return '"' + Faker.date.past() + '"';
    }

    if(field.type instanceof Sequelize.TIME) {
        return 132323233;
    }

    if(field.type instanceof Sequelize.FLOAT) {
        return 12.3;
    }

    if(field.type instanceof Sequelize.DECIMAL) {
        return Faker.random.number(3, 2);
    }

    if(field.type instanceof Sequelize.TEXT) {
        return randomString(_.random(1, 10));
    }

    if (field.type instanceof Sequelize.INTEGER) {
        return _.random(1, field.type.options.length);
    }

    return 'by liwei';

}