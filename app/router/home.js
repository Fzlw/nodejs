'use strict';

module.exports = app => {
  const {
    controller,
  } = app;
  /**-------  页面路由  ---------*/
  app.router.get('/', controller.home.index);
  app.router.get('/login', controller.home.login);
};