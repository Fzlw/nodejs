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
			ImgGroupId: "vbbaZ", 
			Content: "FgpGRcCSstbN7yXg67CFhMIvqTijF4YEAgX1i0s0kY5f8iLZzENm8Uu88Na7XWFHwCABuxhUwTQezSvEBNNKU8PnnaGhB9xGQ0bbzoiBTNI3KDN2GgIc5YNFqNGTL9COdij4fpfPKNGwB2lEi5J5SQg5uzup96CFTU91RvlgFIJmuEP934PW8SiMavp97uk7EbG4BHUpcHjySajzZ7bCCp4l90GotSJK9dW8Vvo2GW28xHCEFCwTUnO5TPoIo6gjIt1d0Gk1yOgYz0Nsket4ijAd5pP2mcWhZvqWq5GuSJ2tR0UavsBsaRwAcrcAczliI4odKDCgB6MXS7vEvzjThRDNZJ0SkKNUuouNR94zkUgk2qzqVs1NTuhzvtE3VKYtWugpk3MKn2ry6eutjt2kkPDGSij5xvjb51ZgOvKrL08hYCXYXECI3zi7r1pSpxgI4GdhTkRJoiSFObQaYlwcSBqfT6U90Mclvg47W9spY01OP5qudKHypKX4gcxy4FN87dYnUtzfoSa6Y7UshWJqfqE0eVari5CPLsi16Ia7fQWeHqqnnsikpASHq7YmAP5b0pzqxPB9eb6Hn9qWNsDhpoTEQYKToVKTwRTAbj6n9BMkiUJmxmYTTD6xRkcila639XIJIv0yohgNMmPk4Ynr1i6gqavIKwYQ5oRNWlmTQ94FThJuBI4lJAfj5lqMZfxlOtA4FmJPUOCGnWvvmKVuSOcAcyNrMne8h4JvXbf4Sv83QkpYny45cDjxT4TEyW82hVgXTLeoTxDo5hKYXdtEADBf8H5tE63ZVNawj7bpUwZIkdR1Es9XUKfvDw6mdfMlgItdCqckHDSWZ2l2heQPsWnc3YF1xnKlkGMSElqS5lKzp4l0LtaqRoP7IyqnWO0dzRbAEYspZknPGq8Bn32rvMtSIY2i84dtqcP", 
			Remark: "NyuUOW8jkHhe4mYDZ", 
			Valid: 1, 
			CreateTime: "Fri Dec 07 2018 13:07:27 GMT+0800 (CST)", 
			CreatePerson: "ZmjUpKQQZI9efxcT7fcmLjtpmam7zIx7OHLE7tERR4KOvWSEk", 
			UpdateTime: "Sat Apr 28 2018 12:43:22 GMT+0800 (CST)", 
			UpdatePerson: "uL1rDaM8HeHx91cThhMutPlp8MMscYGNC5ErYAFbFyoRC94sr", 

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