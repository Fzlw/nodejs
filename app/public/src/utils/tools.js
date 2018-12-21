'use strict';

define([
    'zepto',
    'zepto-fx'
], function ($, fx) {

    const tipsDefalutCss = {
        position: 'fixed',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'box-sizing': 'border-box',
        // width: 240,
        height: 50,
        padding: '0 20px',
        'z-index': 999,
        color: '#fff',
        'font-size': 14,
        'background-color': 'rgba(0, 0, 0, 0.7)',
        'border-radius': 2,
        opacity: 0,
    };

    class Tools {

        getElementPosition($element) {

        }

        getCsrf() {
            return {
                _csrf: $('input._csrf').val()
            }
        }

        ajax(url, params) {
            if (!url || typeof url !== 'string') {
                throw new Error('url must be string');
            }
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: url,
                    type: params.method || "GET",
                    dataType: params.dataType || "json",
                    data: Object.assign(this.getCsrf(), params.data || {}),
                    timeout: params.timeout || 10000,
                    success: (res) => {
                        resolve(res);
                    },
                    error: (err) => {
                        reject(err);
                    }
                })
            })
        }

        get(url, params = {}) {
            let selfParams = Object.assign(params, {
                method: 'GET'
            });
            return this.ajax(url, selfParams);
        }

        post(url, params = {}) {
            let selfParams = Object.assign(params, {
                method: 'POST'
            });
            return this.ajax(url, selfParams);
        }

        /**
         * @param {str}  text 错误信息内容
         * @param {string}  type  提示类型  'tips' 'success' 'warning'  'error'
         * 错误信息提示
         */
        tips(text, type = 'tips') {
            $('#INFO').remove();
            let css = tipsDefalutCss,
                extendCss = {};
            if (type === 'warning') {
                extendCss = {
                    color: '#FFC82C',
                    padding: '0 10px',
                    height: 40,
                    'background-color': 'rgba(51,51,51,0.7)'
                }
            } else if (type === 'error') {
                extendCss = {
                    color: '#FF4949',
                    padding: '0 10px',
                    height: 40,
                    'background-color': 'rgba(51,51,51,0.7)'
                } 
            } else if (type === 'success') {
                extendCss = {

                }
            }
            css = Object.assign(css, extendCss);

            let div = $(`<div id="INFO">${text || '网络繁忙，请稍后重试'}</div>`)
                .css(
                    css
                ).appendTo($('body'));
            let top = ($(window).height() - div.height()) / 2;
            let left = ($(window).width() - div.width()) / 2;
            div.css({
                top: top + 20,
                left: left,
            });
            div.animate({
                top: top,
                opacity: 1
            }, 500, 'swing', () => {
                setTimeout(() => {
                    div.animate({
                        opacity: 0
                    }, 'swing', () => {
                        div.remove();
                    });
                }, 2000);
            });
        }

    }

    return Tools;

});