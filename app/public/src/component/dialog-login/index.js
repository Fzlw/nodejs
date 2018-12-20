'use strict';

define([
    'zepto',
    'utils/tools',
    './index.xtpl',
    'utils/dialog'
], function($, Tools, xtpl, Dialog) {

    class DialogRegister extends Tools {

        constructor(userTypeId) {
            super();
            this.box = $(xtpl());
            this.postData = {
                userTypeId
            }
            this.render();
        }

        render() {
            let dialog = new Dialog({
                body: this.box,
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
        }

    }

    return DialogRegister;

})