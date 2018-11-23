'use strict';


exports.nameTrans = (_str, sign = '_') => {
    if (!_str || _str.length === 0) return;

    let str = '' + _str,
        index = 0;
    str = str.substr(0, 1).toLocaleUpperCase() + str.substr(1);
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