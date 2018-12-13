'use strict';

/**
 * lw_comment
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_comment.js  start...
});

describe('test app/service/lw_comment.js', () => {

    it('should create a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.create({
            Id: Id,
			DynamicId: "G1HeIoosEV9UtG4C", 
			Comment: "TvWyaiMtji6WihOeig83FoLmQZo7btCHEqEt0RVMVFlAjNiBSIv9AFLNq2C84FgO4zQrhxaAYrnqzsZx05Fwptz5gPO9YtXGO25n0Ln1myMq038RR2Pfa1HJdgvr17VHJnMmW56w7ExBNDRPxg13mpfzmJ22VK2OhJtFrfYj97FOMHH8h0w1JuLAia2X4QBp7R6YsaWu4xVgm4wqNcqFgHPfFfzV0nVZ8Vx7Kx0N88bRFvteRAtYlvEIIDRQ7SRjzuXRKVmm1x9GDgzf4k3iHyfAMxTm1bGd5AmgDV9yGnM5Wd8pxZc8HbOFgCxXeE4LDOWXQKJf1ycfml7ONf29FSgQumcO2LTskipg8SbxQHH3RJzcHufDt7sUADzMT6czmXeCqRbQEJywQIqNyQJhLRJllBTgiWYSRPCoQGETbRVpobpZZE9A8OUVltJ4lFHSgss3rRDkGlXMLTZig1RMpuMpXPOYcGvLokzd5ihhUajsBnki0yp6jAT5ApyRShqagTJJad1jwtoRprvBsbRiUjtk7AYJAESzs1jSXmaIdC0Uby0Lv3zbXU6tg2dKo1HqzTCwEQ8AB58CyHc0SOz3DF3j43MLOIfqwb0C10aJT713SUlSOtv8mhOv8us1PriQuxIyMkjMlS5XwuYYl7tMLHTEXXpnQHY1BcTVJFlF1TmjLdlbgiznx79zUtczGjeYuNwIOC8q168O7apAOso0XlgRwdHmlhbc3LnLoNfxYDk26dnUuWWv9cUDc4Z5ZaaPXXiXAsuYokZGHBUv7pMyO9YXEKJ0Gx02PaXpmU6Oox8J4mE6WAgFfbdzXsBqttgy837eptCcOZr8JxssgJSa2Ueb5qjz", 
			VisitorId: "WMqDNXJZm2A3v", 
			Province: "kF4dvLqym6bgtK81rvhfyLnH3D", 
			City: "2i0iQNxsjnhErKiQko5L3OShhhcbaSaHd5R2x5HpL9ef94i4OoJGLiQ2rmLrYYiNp7771KX1WQRYl0nAZc", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Fri Sep 07 2018 20:01:28 GMT+0800 (CST)", 
			CreatePerson: "k3Sddkixn9zwl7jiTMqAL0NN8IaYvUut1Po2GzShFEirP0WOmHhUf", 
			UpdateTime: "Thu Jan 18 2018 12:39:47 GMT+0800 (CST)", 
			UpdatePerson: "pwkfqMCKI1YZoQDytBM0h9j6TywkqvB7rU5TiHyNVEgwSHY6p021HpvEJF", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwComment.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwComment.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const removeEntity = await ctx.service.lwComment.remove(entity);
        const updateEntity = await ctx.service.lwComment.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_comment entity', async () => {
        const ctx = app.mockContext();

        const pagination = {
                current: 1,
                pageSize: 10
            },
            where = {
                Valid: {
                    $gte: 0
                }
            };
        const entityList = await ctx.service.lwComment.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const result = await ctx.service.lwComment.delete(entity);

        assert(result === 1);
    })

})