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
			BookId: "vd", 
			Content: "aPYqYlA9xdtnxrgw6pZ2yX8hSuKLgTQdXegPxXunTV7AbVGeuQTnm3m81KHZai0mWWuENbiPdEOyEavuk2ipfS9CrXFOrOHY9Vc57jaWwZZ6JWJmB2tks7p0dPO0RBYvwvSw1WNp1czGnhmQnOfQywnQ1cQHRgnGlWwydr54UWXzXIt4Nut6io3Ua0VVq15tQYnwyp9tSgxLzgg07m5GWngMKJGMm6DxT19LNnM1sxz93eSAxjPGZUWDReZWLSqPM7p71bDeUNs4c1Jbgj3ANpbxefA3ccpaVVVW8krO3KKW7xm6n0jUdF3tT0SP2Gi9F6NY7xFKRF36VIw6eyLjNFTJNtTenSzDVo8McnHNAAaQGHoXlcpuNfvittuhqyFrIbhJNHFM2ev76xNSUFvAmO9FhP9NHTG0sjCtJcxyrgN523LhWOV5vdb2XQNmzhYMVT0du7DZs2GgZ0gOucyouYLEyemojvTnOEu1Zv6ee2gBjTvcAacumaWn7hE47fKq8C6miI91V1YM1kMHUMjQt65HGmKpvwQb1VdikK5QlzAoTd5NWc8Al1e1UXytKabOMRpCSCRgC3bSQ8w0REuoqO4ttJ5LqKzXFi4K4LJn40fhpa3CQfq2oKSJ2R7BC9fsvt9QV2KohQmTsXKYx2LFaUK10dKgUgu29M3Jo8SV0MDkCJbi2WT5yuJjhyXTCWz", 
			Remark: "tFCx2ztEsgtQuv8VBnJ5c6BM8nEbmtZnTfH50Fh2MC8Uv0Vy3BW5EGwK56NhQvvWZ7X5G78Mbs", 
			Position: "z7BLBl", 
			ImgGroup: "1", 
			Valid: 1, 
			CreateTime: "Fri Jun 01 2018 23:22:01 GMT+0800 (CST)", 
			CreatePerson: "goWkRxWLCMOCyR1V3zj4EPlQG5roOXVy7Naa3BWRMFVPz", 
			UpdateTime: "Tue Nov 06 2018 20:26:19 GMT+0800 (CST)", 
			UpdatePerson: "xKORHbJVZwFFeSW63hJ8O6Bq7yI7UOi4hCEXLIsHQZXh2t9jZpPy0s8yyV6sdAFhhUyTeykg3G7qdY1ToMN0xiC3Ky83hMnxYZ", 

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