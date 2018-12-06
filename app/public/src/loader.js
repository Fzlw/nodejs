'use strict';

requirejs([
    'zepto'
], function($) {

    const defaultConfig = {
        diffRange: 200
    }
    
    /**
     * 动态去加载每一个模块
     * 思路： 1. 获取所有components组件，获取每一个模块在网页中的位置
     *       2. 监听scroll事件，并在距离组件一定距离时动态去加载
     *       3. 对于加载完成的组件，注入参数box, 为当前模块
     *       4. 加载完成后 TODO
     */
    class Loader {

        constructor(components, options) {
            this.components = components;
            this.options = Object.assign({}, defaultConfig, options);
        }

        init() {
            this.Req = window.requirejs;
            this.initWindow();
            this.initPosition()
            this.loadCurrentViewportFile();
            this.scrollEvent();
        }

        /**
         * 获取浏览器宽高，总宽高，当前滚动条位置
         */
        initWindow() {
            let windowInfo = {};
            windowInfo.clientWidth = $(window).width();
            windowInfo.clientHeight = $(window).height();
            windowInfo.TotalWidth = $(document).width();
            windowInfo.TotalHeight = $(document).height();
            windowInfo.initScrollTop = $(window).scrollTop();
            this.windowInfo = windowInfo;
        }

        /**
         * 获取模块的宽高以及相对document的位置
         */
        initPosition() {
            let components = this.components,
                tasks = [];
            for (let ele in components) {
                let currentEle = $(`div[data-mod-id='${components[ele]}']`);
                tasks.push(Object.assign(currentEle.offset(), { currentEle, path: components[ele] }));
            }
            this.tasks = tasks;
        }

        /**
         * 加载处在当前视口差值范围内的文件
         */
        loadCurrentViewportFile() {
            let { diffRange } = this.options,
                { clientHeight, initScrollTop } = this.windowInfo,
                tasks = this.tasks;
            tasks.forEach((ele, i) => {
                let { height, top, currentEle } = ele;
                if ((top + height) + diffRange >= initScrollTop &&
                    top - diffRange <= initScrollTop + clientHeight) {
                    this.requireJs(ele.path, currentEle);
                    tasks.splice(i, 1);
                }
            })
            this.tasks = tasks;
        }

        /**
         * 异步加载文件
         * @param {string} path   文件加载路径，必须是require.config里有的
         * @param {object} $box   jq对象，当前元素的指针
         */
        requireJs(path, $box) {
            if (!this.Req || typeof this.Req !== 'function') throw new Error('requirejs not found');
            this.Req([
                path
            ], moduleFn => {
                if (moduleFn && typeof moduleFn === 'function') {
                    try {
                        if (moduleFn.prototype && moduleFn.prototype.constructor) {
                            new moduleFn($box);
                        } else {
                            moduleFn($box);
                        }
                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    // TODO 其他类型
                }
            })
        }

        /**
         * 监听scroll事件，实现按需加载js文件
         */
        scrollEvent() {
            let handle = this.throttle;
            $(document).on('scroll', handle(function(e) {
                // 判断是否已经全部加载完毕
                if (this.tasks.length === 0) {
                    $(document).off('scroll');
                    return;
                }
                // 如果很快速的滚动，直接全部加载   TODO
                //  TODO
                // 按需加载在视口范围内的模块文件
                let scrollTop = $(window).scrollTop(),
                    height = $(window).height();
                this.windowInfo.clientHeight = height;
                this.windowInfo.initScrollTop = scrollTop;
                
                this.loadCurrentViewportFile();

            }, 100, this));
        }

        /**
         * 
         * @param {function} fn  要截流的函数，不允许箭头函数
         * @param {number} delay 
         * @param {object} ctx 
         */
        throttle(fn, delay, ctx) {
            if (!fn || !fn.prototype) throw new Error('fn cannot be arrow function');
            let timmer = null;
            return function(...args) {
                let _ctx = ctx || this,
                    _delay = delay || 100;
                if (!timmer) {
                    timmer = setTimeout(function() {
                        fn.apply(_ctx, args);
                        timmer = null;
                    }, _delay)
                }
            }
        }

    }

    let divs = {};
    $('div[data-mod-id]').each(function() {
        let path = $(this).attr('data-mod-id');
        divs[path] = path;
    });
    let loader = new Loader(divs);
    loader.init();
    
    return Loader;

})