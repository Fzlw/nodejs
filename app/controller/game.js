const Controller = require('egg').Controller;

class Game extends Controller {
    async flappybird() {
        // 后期判断用户
        await this.ctx.render('game/flappybird.xtpl')
    }
}

module.exports = Game;