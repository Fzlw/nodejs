'use strict';

/**
 * lw_dynamic_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_journey.js  start...
});

describe('test app/service/lw_dynamic_journey.js', () => {

    it('should create a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.create({
            Id: Id,
			StartTime: "Sat Aug 04 2018 02:24:58 GMT+0800 (CST)", 
			EndTime: "Thu Oct 11 2018 17:21:44 GMT+0800 (CST)", 
			PointOfStart: "O04LYCxj3kcq2VHR6nnxpd3qfz84Er", 
			PointOfEnd: "M3CYa9wmW9QggGdeO6zrKFYbwAZ5Zfclcguq3u1nLqhsZw8aiyFSCpWFQfFaujNSD7qZ81qPmbvqrICkXy0GmFtIOzStQE1Ij", 
			ImgGroupId: "a", 
			Describe: "pUVYfK8HhUGOVGtcH6xo66t3QRdbq38MTX5WtdseqRQkTDWwG7delmghK6p0wUmfPmo93OGXTIM8Chn8jCdSiGQCnOFD66chVHL2br1ocJIzhQJgHvx68x6y81CD2pxAqTG0zGHhiEQsLQi5mZ9A52tcNAGNZ6VSa9pfaGsSubBNcti1Tq9nrI8m8HToiCThEDvv6mSFKzAQsCcNqOTTX0yyTm2nx4MzA9OIW3bTHhzhVAsZbVCMsdRn6fwUED2ViqhuzZstGnR9ijuJ7qxtwwlEMgVmlpauKlhTQ6yvyPG7T97u4kVtQ4KrTuTyj4ilh2ccGLT00FOcjK5Dg1NfxCUBsgUc94FpVlQIhS7XKQFSWlBKLvhFdNrJEUSBWOjl2img81eHC2Z50cGnALzaGqZm7TyTR4ezeFojiKtKRLGhJ3zWPLmeN3vId7QkdCwodvQAYG6nSHnukCZH9vrahPQ2Q18dmPw6FJYq9MxUbcMn29gYjtNViII1ZVxSY86vY4fZJv3R3O2D4RQ9km4kKEebE5zkEsRlLffSKGAe9u4oin8SDuMvBYwgBwQjckVdg8QM0m9ctclIIjAVo0BgJLdAVmeuw8ZU8pXIKpXatHYzNjpMvRQOy5sgpFpx8WRf5vFetrTSGHskyR7XF7GQY4VrdCWnhV47WuSM7QgihRCbQHz4i5h9Rfp8XPewfbmaaZSBnSMy69hKOd3rCS2oQmNn8gsiey9UxRK9mBbgrzh5btUxJZCHsfzQy2p0Lb0cYrDFDfiOpMu2RxMntaUFz8b3iriF8xDjWpxZaSKBIVeCSxmiE3wcbzbccmBsg9yNsDUNQWFK29uYyhYFHm4JyaGkBJ0JEVywOqAveVclzUKhbet", 
			Remark: "MfnlqPXWCdmD0kgHbBFKMAyFPQVHNZETrHHWXU0M5La3Ec", 
			Valid: 1, 
			CreateTime: "Mon Oct 01 2018 16:14:06 GMT+0800 (CST)", 
			CreatePerson: "RKx", 
			UpdateTime: "Thu Nov 29 2018 06:07:47 GMT+0800 (CST)", 
			UpdatePerson: "FdG52PeqoKnMgomkmW7snp8iNMpWqhOmfbIKFUIf5myQE14Oy", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const removeEntity = await ctx.service.lwDynamicJourney.remove(entity);
        const updateEntity = await ctx.service.lwDynamicJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_journey entity', async () => {
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
        const entityList = await ctx.service.lwDynamicJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicJourney.getById(Id);
        const result = await ctx.service.lwDynamicJourney.delete(entity);

        assert(result === 1);
    })

})