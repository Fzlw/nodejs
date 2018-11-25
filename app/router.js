'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    require('./router/home')(app);
    require('./router/game')(app);
    require('./router/test')(app);
    require('./router/help')(app);
};