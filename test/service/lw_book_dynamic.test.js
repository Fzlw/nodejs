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
			BookId: "JrvCuAnycl", 
			Content: "m83oK9uobl3GoYZpN8dvNIyNGhVK1sY4gViqisnvc4oppBJqIPbnhb3Bs544tYYEaATUiI7qTgTkDdKSJeviyf2dBn5ROVYC6qJA9iHnbw3mdDCv8bbQy38r2H6faJn54MnL8GvPZ2l1fsMSOXo3WKwZVF7uinvqVDJNkYXpMVVPG5DeWHitEFp1hbRwbfyOTIiZ5yAmVPvomcEuiEW1VnxiYFU2bOUFGt67DWwpps3TXv00tO723iSMb3FAkfns4dr3Cro6S985EythF3DUtSeDNB7s3PgGfs0TrCuEWE5QB06XIJ8wpLOB9ovvheOWunecpb4beMZ6H5I7zHNkkaFVCaE4yXXXNlbt3J6fQvyQ0OlBCsJXY3MfidnFts1HfUOl5SwVwh15bSzlTzue9Hai4yBF14ni01WQLrfOLVndyhxXtuN4fD7e5GqxT3krXwDma11QLeSyIKHHpqaPf1Q1bfNHENyiBYAt3nzxCMh1inqjHIXYRAl7lcyH6eMPOkLESGXDmwMvyil6sa1td1h7g5lg4kpbHzHKbnFV2yS60ESKBDh6yyTYqc8Xm8U2kMou4kJw38jGH2SwnG489l7sHXq4ylZsfRq95c0TcWjiJAZE21o4NZOL7vILylyVP09z9rxLyRejlCgHpb5zrYDO6KYPDuTBjp4uOC9jhuwHNELPjv1f3agow2EJkfeJ6TzjWgtHUiWG7Pj9zYIgpxAi86d5S4cT", 
			Remark: "Ztne9oSQsMMSUVDVa6BdVxC4uHofhI5D3ouLbiQgca7oQLPJntojiNXiVmMp71WHwW3GKnXsMn7hFCaAyhMQf3rdva8UYN6qUF4", 
			Position: "hrkEhFnLctjDu3uVXeYLyuQLRfVSUjgGnldJUkwyhXMP", 
			ImgGroup: "S6nUWLlVAz4F", 
			Valid: 1, 
			CreateTime: "Mon Dec 25 2017 00:48:03 GMT+0800 (CST)", 
			CreatePerson: "izEKGJxE9VxGoDAvPlLDUxkoZAgz0qYEZ2tc8CrAGdMkFlatQlMXpchY0z0wMit4vx89JbmGjLh", 
			UpdateTime: "Mon Oct 01 2018 01:23:00 GMT+0800 (CST)", 
			UpdatePerson: "l8z8ndOWjTj4o3Vqoq2NERWAWRIJ5CNH0cW2lYnmWGbwU0eNX5gGSBZ6YY1ibGVkmb3mZdIrC4IDIP3l3tORwZLvImoDEaHL", 

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