'use strict';

module.exports = app => {
  const {
    controller,
  } = app;
  app.router.get('/test/banner', controller.test.getImgs);
};