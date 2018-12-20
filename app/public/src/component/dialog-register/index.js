'use strict';

define([
    'zepto',
    'utils/tools',
    './index.xtpl',
    'utils/dialog'
], function ($, Tools, xtpl, Dialog) {

    class DialogRegister extends Tools {

        constructor(userTypeId) {
            super();
            this.postData = {
                userTypeId
            }
            this.render();
            this.register();
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

        register() {
            this.box.find('.register').on('click', () => {
                let nameArr = this.box.find('.form-register').serializeArray(),
                    data = {};
                nameArr.forEach(ele => {
                    data[ele.name] = ele.value;
                });
                // 检查参数 TODO 

                this.post('/register', {
                    data: Object.assign(this.postData, data)
                }).then(res => {
                    console.log(res)
                }).catch(err => console.log(err))
            })
        }

    }

    return DialogRegister;

})