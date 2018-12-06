'use strict';

define([
    'zepto'
], function ($) {

    class Banner {
        constructor(box) {
            console.log(box)
            this.init()
        }

        init() {
            console.log('this is baner module')
        }
    }

    return Banner;

})