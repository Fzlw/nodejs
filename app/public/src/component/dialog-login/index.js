'use strict';

define([
    'zepto',
    'utils/tools',
    './index.xtpl',
    'utils/dialog'
], function ($, Tools, xtpl, Dialog) {

    class DialogLogin extends Tools {

        constructor(userTypeId) {
            super();
            this.postData = {
                userTypeId
            }
            this.render();
            this.login();
        }

        render() {
            let dialog = new Dialog({
                body: $(xtpl()),
                width: 360,
                height: 180,
                closeBtn: {
                    width: 20,
                    height: 20,
                    right: -20,
                    top: -20
                },
                closeBtnImg: '//img.cnhash.com/517135e6-5608-437f-95fa-b5363717ac89.svg'
            })
            dialog.open();
            this.box = $('#' + dialog.id)
        }

        login() {
            let reg_mobile = /^[1][3,4,5,7,8,9][0-9]{9}$/,
                reg_pwd = /^[a-z0-9A-Z]{6,}$/,
                preMobile = ''; // TODO
            let mobile = this.box.find("input[name='mobile']"),
                pwd = this.box.find("input[name='password']");

            this.box.find('.login').on('click', () => {
                let nameArr = this.box.find('.form-login').serializeArray(),
                    data = {};
                nameArr.forEach(ele => {
                    data[ele.name] = ele.value;
                });
                // 检查参数 TODO 
                mobile.removeClass('tips');
                pwd.removeClass('tips');
                if (!data.mobile || data.mobile.length === 0) {
                    mobile.addClass('tips');
                    return;
                } else if (!reg_mobile.test(data.mobile)) {
                    this.tips('请输入正确的手机号码！', 'warning');
                    return;
                } else if (!data.password || data.password.length === 0) {
                    pwd.addClass('tips');
                    return;
                } else if (!reg_pwd.test(data.mobile)) {
                    this.tips('密码以数字字母组合，不少于六位！', 'warning');
                    return;
                }
                // 保存先前数据
                // preMobile = data.mobile;
                // 发送请求
                this.post('/login', {
                    data: Object.assign(this.postData, data)
                }).then(res => {
                    if (res.success) {
                        window.location.href = '/';
                        return;
                    }
                    this.tips(res.msg, 'error');
                }).catch(err => this.tips())
            })
        }

    }

    return DialogLogin;

})