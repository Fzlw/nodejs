'use strict';

// 包含一系列整理数据格式的方法

/**
 * @param { [{}, {}] }  tarArr  接收数组对象形式数据
 * @param {string}  ...fields   要更改形式的数据的字段，可以有多个
 * @return { [{}, {}] }  f返回包含对应字段的数组对象
 */
exports.getSameInfoAsArr = (tarArr = [], ...fields) => {
    let result = [];
    result = tarArr.map((ele, index) => {
        if (typeof ele !== 'object') {
            throw new Error('params must be [{}, {}]');
        }
        let current = {};
        fields.forEach(field => current[ field ] = ele[ field ]);
        return current;
    })
    return result;
}