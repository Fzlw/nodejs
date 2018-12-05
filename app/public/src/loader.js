'use strict';

requirejs([
    'zepto'
], function($) {
    
    /**
     * 动态去加载每一个模块
     * 思路： 1. 获取所有components组件，获取每一个模块在网页中的位置
     *       2. 监听scroll事件，并在距离组件一定距离时动态去加载
     *       3. 对于加载完成的组件，注入参数box, 为当前模块
     *       4. 加载完成后 TODO
     */
    class Loader {

        constructor(components) {
            this.componentTask = components;
        }

        init() {
            this.initPosition()
        }

        initPosition() {
            this.componentTask = this.componentTask.map((ele, index) => {
                console.log(ele)
            })
        }

    }

    let loader = new Loader($('div[data-mod-id]'));
    loader.init();
    
    return Loader;

})