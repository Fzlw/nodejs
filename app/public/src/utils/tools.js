'use strict';

define([
    'zepto'
], function($) {

    const ajaxConfig = {
        type: 'GET',
        dataType: 'json',
        timeout: 10000
    }
    
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

    }

    return Tools;
    
});