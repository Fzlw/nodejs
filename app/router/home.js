'use strict';

module.exports = app => {
  const {
    controller,
  } = app;
  app.router.get('/', controller.home.index);
};