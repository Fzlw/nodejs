'use strict';

define([
    'zepto',
    'utils/tools',
    'component/dialog-register/index'
], function($, Tools, DialogRegister) {

    class PageLogin extends Tools {

        constructor(box) {
            super();
            this.box = box;
            this.init();
        }

        init() {
            // test 
            new DialogRegister()
            this.handleClick()
        }

        // 通过事件监听分配各点击事件
        handleClick() {
            this.box.on('click', (e) => {
                // 只处理button
                if (e.target.nodeName !== 'BUTTON') return;
                let target = $(e.target),
                    name = target.attr('name');
                if (name === 'visit') {
                    return this.clickBtnVisit();
                }
            })
        }

        // 游客按钮点击事件
        clickBtnVisit() {
            let nameArr = this.box.find('.form-visit').serializeArray(),
                data = {};
            nameArr.forEach(ele => {
                data[ele.name] = ele.value;
            });
            // 发送请求，返回promise
            this.post('/register', {
                data: data
            }).then(res => {
                // 登陆成功 或 已经登陆 status = 30004
                if (res.success || res.status === 30004) {
                    window.location.href = "/";
                    return;
                }
                // 登陆失败 
                this.tips(res.msg);
            }).catch(err => this.tips());
        }



    }

    return PageLogin;

})