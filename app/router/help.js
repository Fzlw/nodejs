'use strict';

module.exports = app => {
    const { controller } = app;

    app.router.get('/404', controller.help.help);
}