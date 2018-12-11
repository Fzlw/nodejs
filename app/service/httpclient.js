'use strict';

const Service = require('egg').Service;

class HttpClient extends Service {

    async get(params) {
        try {
            if (!params || typeof params !== 'object') {
                return null;
            }
            let result = await this.ctx.curl(`${params.baseUrl}/${params.api}`, {
                method: "GET",
                data: params.data,
                dataType: "json",
                timeout: (params.timeout && this.app.config.DefaultTimeOut)
            })
            if (result && result.status === 200 && result.data) {
                return result.data || result;
            }
        } catch (err) {
            console.log('service/httpclient/get' + err);
        }
        return null;
    }

    async post(params) {
        try {
            if (!params || typeof params !== 'object') {
                return null;
            }
            let result = await this.ctx.curl(`${params.baseUrl}/${params.api}`, {
                method: "POST",
                data: params.data,
                dataType: "json",
                timeout: (params.timeout && this.app.config.DefaultTimeOut)
            })
            if (result && result.status === 200 && result.data) {
                return result.data || result;
            }
        } catch (err) {
            console.log('service/httpclient/get' + err);
        }
        return null;
    }
    
}

module.exports = HttpClient;