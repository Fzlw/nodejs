'use strict';

/**
 * 根据给定标志转换成驼峰法
 * @param {String} _str 需要转换的字符串
 * @param {String} sign 转换的标志字符，默认为 '_'
 * @param {Boolean} firstUpper 是否首字母大写，默认为true
 * @return {String} 返回处理后的字符串
 */
exports.nameTrans = (_str, sign = '_', firstUpper = true) => {
    if (!_str || _str.length === 0) return;

    let str = '' + _str,
        index = 0;
    str = firstUpper ? str.substr(0, 1).toLocaleUpperCase() + str.substr(1) : str;
    index = str.indexOf(sign);
    while (index !== -1) {
        if (str[index + 1]) {
            str = str.substr(0, index) + str.substr(index + 1, 1).toLocaleUpperCase() + str.substr(index + 2);
        } else {
            str = str.substr(0, index);
        }
        index = str.indexOf(sign);
    }
    return str;
}