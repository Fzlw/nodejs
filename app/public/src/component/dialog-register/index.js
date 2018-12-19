'use strict';

define([
    'zepto',
    'utils/tools',
    './index.xtpl'
], function($, Tools, xtpl) {

    class DialogRegister extends Tools {
        constructor() {
            super();
            // this.box = xtpl();
            console.log(xtpl);
        }


    }

    return DialogRegister;

})