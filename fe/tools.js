// 递归获取数组里的字符串,并去重
exports.getStrFromArr = (arr) => {
    if (!arr || (!arr instanceof Array) || arr.length === 0) {
        throw new Error('参数有误');
    }
    let result = [];
    let recursion = (arr) => {
        arr.forEach(item => {
            if (typeof item === 'string') {
                result.push(item);
            } else if (item instanceof Array) {
                return recursion(item);
            }
        });
    }
    recursion(arr);
    return [...new Set(result)];
}