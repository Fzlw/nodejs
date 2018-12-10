'use strict';

/**
 * 一系列与字符串操作相关的方法
 */

/**
 * 用指定字符填充给定字符串
 * @param {string} targetStr 需要填充的字符串
 * @param {number} len 填充后字符串总长度
 * @param {string} sign 填充符号，默认为0
 * @param {boolean} isHead 是否在头部填充，默认为true
 */
exports.fillString = (targetStr, len, sign = '0', isHead = true) => {
    if (targetStr.length >= len) return targetStr;
    let str = targetStr + '';
    if (isHead) {
        while (str.length < len) {
            str = sign + str;
        }
    } else {
        while (str.length < len) {
            str += sign;
        }
    }
    return str;
}