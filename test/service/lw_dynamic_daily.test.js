'use strict';

/**
 * lw_dynamic_daily
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_daily.js  start...
});

describe('test app/service/lw_dynamic_daily.js', () => {

    it('should create a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.create({
            Id: Id,
			ImgGroupId: "Osu390fdtKjGEu6nM7", 
			Content: "fI7hpBt3xpzPAr7W6RXX9r0zCKKbFrMwjSsJqlsFcxYcMzJeOaC9kdRnoszxfIPl9thqSYp9oihQihDuceh6zG63zbEovhLafb4IrXwspkq1jGhKuQzGjSzIu4G1FMGDtsMHGSXN9L97MQmfPG0OyYQ5xMjBuFEtaLO2pCNiJxUSbnRqa14YZOaG28fu5FXGDn6vqspFywzJOEW9rCOSjj1w3MfjjsyP7XzfwpJYAvrLgw6vqB6dX9uhZnSWRbvG1652RVRvZC3TxdmPL1aqbCRC7jSMjkAmqjs6IU0rDS0dbB9wbC1Kyre93nsDD5KVCw7XWCbE4AsosuA1Q9H5H74dRx1Q1u7ZnjC2Hy9ptxEBxGsrRVIp7WoaWNC5iInoxRbvv63MYcZowqx1cfQ2cwXTAfRWmkc5b1x4pfXYhgXszAqPmehWzTkWhNKiZOJrUDPd3lg5kWyIMB8E4owopeAr3n1CE9B2SPEqMXNEmKYyP0TaVjnkYjBR5urgFyaZvhDrqBztfmD6XQA0PHoa0Lg7VODVr2KB433DNkRWka2VGVMuu1OKru9F67y7cOUfKRfwJo3tqrjv6qKZd6dstoQDH0H7fuggt0QxYxZCjV0h15iT61fZDs5V35tBRa169sxLsOI1MAdZxEH0hv9LfO547btd8NkCIfEhzuhDDsqLfqq8OqhquX5dSlMc7gJ41JayXMUFtHkU1kaspgNZAHLmrKpjhzalwRjh3kO69ob0GoTTXnwQDT5UmxG1oiThiFPrRS7bsI5i5Jw55T8m7R2QhXkh4EKVRBLW01Ik4wm8EBAUWYX7WxDDtULN33iJVjG8daeTKpVbB6UO1uZ0Ha9NFFdUs34ZTBFPY3atynwfrawhuKnzNStEKdjZvJ2xBymSfjIcSIliYnoZBQVzIZCMOPZ8zCqkEPTc2jFHCneTmvQQZE7mBL", 
			Remark: "Gy54oJo2d2F0F53ga9biTfFfHzRKHcQVYgySML46AkwP", 
			Valid: 1, 
			CreateTime: "Sat Jul 07 2018 09:29:03 GMT+0800 (CST)", 
			CreatePerson: "DhwoFXxQW", 
			UpdateTime: "Sun Oct 28 2018 06:34:43 GMT+0800 (CST)", 
			UpdatePerson: "69Mel8Vc6ac5KsoHm4ZAsS0bUfjuxz9r2EM6PZHgoxcKOWXj0jnAcTX0g5VExk1iLuYaZiAADFOl8KfUlmBrAtfi33XrY94CY", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicDaily.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const removeEntity = await ctx.service.lwDynamicDaily.remove(entity);
        const updateEntity = await ctx.service.lwDynamicDaily.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_daily entity', async () => {
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
        const entityList = await ctx.service.lwDynamicDaily.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const result = await ctx.service.lwDynamicDaily.delete(entity);

        assert(result === 1);
    })

})