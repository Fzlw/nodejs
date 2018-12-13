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
			BookId: "QPbl4eFY7DGdsHs", 
			Content: "JK6yfspgTIiMf6FYTVYMg7g9HTLXVb6heSYVJ3nFADNWMEAvTJEnUs1wWIwaYYOvBZ3VVsh9CIleAMPDsZJ6SvsqhVKjsKVawTPKCSRDUlcgJqNv90ba3sMpoDwaUyV8J165Wf2YAyW6HGTCN1uAql8dXieD71zmzPngF7wniISCPizOVXu8nxMgc30odjhBiqmK8iWjfnN87sLtddje09BFaD2ULFwjd9SxdVKbV2iITYha47mMiFTynHD2GEl8mD1xHP1xLfvWAkbjV7J6oMs1xkih1ge9xXRTPLNba8iqSIi8tQ0TdPVOtdoNKqbDWXPICgaBPl6OqLUfvCNqvYlj1yhffhLVxJTm7DzXMJJ1r3pUOvW4n4XBZHj77V74RpMm54KkCn0x68lN9YQH3BC061sajqCFIZSspjcKUPiuEoMf8NigV6R04ygtEpK4fPZ7KrcqhzhmjN3Yq70gKMASoUPX8bVKlXHKut6dGSkmLXKWa957d2O1QhDPtFLnNIIb2zymDRjzuYPcCmKC2ajkvKRhJRKlxNjKUHEbAcwpvS7Ew5LtLuvOvWiaZXWY40FBMQhG9WoQKL9llbJGTQ07NcaHTTn9VyLHDDe3cn2EqCYLJSUkWl7RbEvP5zkVEW1h7JaKZnMSiF81Y4br9K03QsHuIMvOZ2yBtukmRMs7Ca9eKxN9uGVEPhLVGSVUdWe3FTfWEUyUryX8DqPJxS191qOfSQwZWiPtUnsveKz8xuWR9exDAMvJT8UWKtZjCRhsMmvsqEw5I9tRoGs5cexLMJQGfqKoYfIgJUzFXbcRb6E0ZmjIJTLJSmsRRuQdy6bnYdqLxCJrr7LEZkVYVrAkRUMWLIafpGnUfBTaAuIgCG96d4t1X6MXXCex5qAZDdOcCEaWPBPsgEVSByRl6Un1GGkq33ic9VJaif2", 
			Remark: "qFt8PXyLXVEu600AgQ2IygsPf6N0", 
			Position: "9oRiaC4rlBiloguWMQt9I11kaBH2oAy0oj9", 
			ImgGroup: "JjMj5Vs7T5emt", 
			Valid: 1, 
			CreateTime: "Sat Oct 13 2018 11:41:53 GMT+0800 (CST)", 
			CreatePerson: "TVqcy5vCwYhkf4Idjv3EJNVT6wh6X2b04Ggdz47iAc87W4CpJ1Ril5kmRrduTztmzP3CEYWAffWWJJOBp85t9k8TNdQNCzy2lzpb", 
			UpdateTime: "Thu Jan 25 2018 21:50:05 GMT+0800 (CST)", 
			UpdatePerson: "foOQp6kUqBVY2yNWFk3VYmdOArKZYENuB3nMzQLR0pNI2G01f0Dgp9f2Nb6h8qUTCaM", 

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