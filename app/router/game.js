'use strict';

module.exports = app => {
  const {
    controller,
  } = app;
  app.router.get('/game/flappybird', controller.game.flappybird);
};