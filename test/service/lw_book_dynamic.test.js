'use strict';

/**
 * lw_book_dynamic
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_book_dynamic.js  start...
});

describe('test app/service/lw_book_dynamic.js', () => {

    it('should create a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.create({
            Id: Id,
			BookId: "yc6M", 
			Content: "X0z2fdYlrkIGKuE43vT7FGqihDSmqPqfBsjaJeIBJREbpZQoybJN0GvGkjdGHCvjqEVplfyVjLegMIeUaMj50J25yHNO9kLEppgRJHyK4tXNiQMPZxE1KX5jEKeTCMjSq31EIinzK5DwZDXAN3fujEWL9JnSDwRxvCOHtFmfbFUeBeXn9XuYKhIU74OyYE7fqQi5SzhXG64msFIx0m2vgNtdetxOEHKiZsDhR9kX0cPLFPc9k3fgzE7KnXmF9JDpQgNIJflO3aapci0cTzFN8odA5w8VKNNCzlcs8kbY7Iz2NoLrJpN7kjhamjEWhzDMOrEOr5Zm700QHjP6O6XtGgL67tE9d7LOL2eESNI9msg4M5XYJWEydOEkxfLU6X47u3PmC4GZHHl3UFN12cGu2iKID7jKf6tViJbkyk1IOQkFPVjcOh70nzisaCB6Ql8", 
			Remark: "RD3Ak6FVVoMw5ZsaQyeFBBnn7A9LKTq6pJeregXhRR9LTyEb", 
			Position: "VnKTh9nYoPmZhEMlmAyHGH", 
			Valid: 1, 
			CreateTime: "Wed Oct 03 2018 19:04:13 GMT+0800 (CST)", 
			CreatePerson: "ZdpNHuFKYNc2O3D6n4knVA5LarpTWuFgDNe11NdA8594ZrYe5TZ9bPFedsF5MYz79jSUniCP", 
			UpdateTime: "Sun Apr 22 2018 19:39:49 GMT+0800 (CST)", 
			UpdatePerson: "FHoIcXf9d5Jprt3uu0HIHpJ5b8tyRdVo", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwBookDynamic.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwBookDynamic.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        const removeEntity = await ctx.service.lwBookDynamic.remove(entity);
        const updateEntity = await ctx.service.lwBookDynamic.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_book_dynamic entity', async () => {
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
        const entityList = await ctx.service.lwBookDynamic.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_book_dynamic entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwBookDynamic.getById(Id);
        const result = await ctx.service.lwBookDynamic.delete(entity);

        assert(result === 1);
    })

})