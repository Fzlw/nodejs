'use strict';

/**
 * sysperson
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/sysperson.js  start...
});

describe('test app/service/sysperson.js', () => {

    it('should create a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.create({
            Id: Id,
			Name: "9YZFB2hxi8I6lxK9rlvE", 
			LoginName: "FdK2EkY1eoWYO", 
			Password: "fiDXgWe2ngpj2GFxsuvUBj6SakLzIKnTRBdthjzmbx4crzjrr1dpr9vXR4RKv9RzNi4xQ1ukVt4fpQ4oycrI5pydOHJ1RfcvImJBgIfXNunXO73rifQJfNqZ07b9Vijo1", 
			Sex: "C", 
			RegisterTime: "Tue Mar 06 2018 12:00:57 GMT+0800 (CST)", 
			Province: "mbS7iAf0Oure8", 
			City: "HN7btRfc9boCYK1etQwPLMx6xMP8rEU6UbuTUC4BfDabU3I6sTpWDXXbVpV9nZY0XwBGiS", 
			Introduce: "BnVdP6z2zQIzuAujeUBQfxYsCiH10Dd6sptHQcfaTTfsvkNnyRBFVzUtCaLPQ1XqeUmJAquWftkoNtxgDI469Lk7CSKtUR", 
			Position: "en2h4h9Aj", 
			HDpic: "6e3pVmYyvKxpcbmYL71", 
			Valid: 1, 
			CreateTime: "Sun May 13 2018 16:29:03 GMT+0800 (CST)", 
			CreatePerson: "YPIH6icifwNglq5QqOmZIv3XmYQ08XRGQ2AeYpFDRFhZT3LaBb36N3klEsgpEIxoP", 
			UpdateTime: "Thu Jan 11 2018 10:52:38 GMT+0800 (CST)", 
			UpdatePerson: "RrIO20oMCGY7mKONnXO7mo835h00DIvoIdRyVaNpvNcn8z7T7Q8TugVvY5DBHQyQaGONANzVD", 

        });
        assert(entity.Id === Id);
    })

    it('should get a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a sysperson entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.sysperson.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.sysperson.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const removeEntity = await ctx.service.sysperson.remove(entity);
        const updateEntity = await ctx.service.sysperson.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of sysperson entity', async () => {
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
        const entityList = await ctx.service.sysperson.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a sysperson entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.sysperson.getById(Id);
        const result = await ctx.service.sysperson.delete(entity);

        assert(result === 1);
    })

})