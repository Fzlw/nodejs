'use strict';

define([
    'zepto'
], function ($) {

    class Tools {

        getElementPosition($element) {

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
                    data: params.data,
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
         * 错误信息提示
         */
        tips(text) {
            $('#INFO').remove();
            let div = $(`<div id="INFO">${text || '网络繁忙，请稍后重试'}</div>`)
                .css({
                    position: 'fixed',
                    display: 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'box-sizing': 'border-box',
                    // width: 240,
                    height: 50,
                    padding: '0 10px',
                    'z-index': 999,
                    color: '#fff',
                    'font-size': 14,
                    'background-color': 'rgba(0, 0, 0, 0.7)',
                    'border-radius': 2,
                    opacity: 0,
                }).appendTo($('body'));
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