'use strict';

/**
 * lw_hobby
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby.js  start...
});

describe('test app/service/lw_hobby.js', () => {

    it('should create a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.create({
            Id: Id,
			Name: "EmODH9imQQVVcJBJgUGA1", 
			Describe: "WE7wNp284HZgFj0ZIX4qPD3tG8It51wrbcvd5jiZeTVMyoE3Z1Q71cpVHgDQnNEIWLBa3MNG4NB74HwWAB3MVLelg2ftECg3nx5J884UcSh2YUqeCDngAy8J45lVjPdwZW8cf83uCATKJDp5rtN2OsrBbhqnEPG3Xow5fyCbvZwrKBKFPCS6AuWT3aIIzEtZ6rO5Loxu026BC6JNyDzJdRHfwAjts81Z1EyoGV5MimwG3kEiJQbrvo1CiiRIMTkGhZ8bjKdYiNT2XQpcWZRbbi1RSf5VmKn0foCS3xNwPLrahcjwTe3vykO3TWMDWkrDWq5BwSzfU8eldYhJuSUANOOrwnedcNWcuSqVZ1lw4iUkijqqhkIo0iq3BkA6qrfzdmfqWdDP6rOEN6yvQO", 
			Img: "QLbWrvYaNWZ2Hk4E92bkFW4cR6hZY0", 
			IsSelf: 1, 
			Sort: 1, 
			Valid: 1, 
			CreateTime: "Tue May 29 2018 08:51:30 GMT+0800 (CST)", 
			CreatePerson: "m85wWe0DICvwEG8sn", 
			UpdateTime: "Thu Sep 20 2018 12:28:11 GMT+0800 (CST)", 
			UpdatePerson: "UYkCjcqE01XVg4iwvIobNfnG1ws9GHw9ALze4li56TnIzPVqY0Z5KgxDpMiL2nldz43OiazE3grRPiPk3lM", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobby.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobby.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const removeEntity = await ctx.service.lwHobby.remove(entity);
        const updateEntity = await ctx.service.lwHobby.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby entity', async () => {
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
        const entityList = await ctx.service.lwHobby.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobby.getById(Id);
        const result = await ctx.service.lwHobby.delete(entity);

        assert(result === 1);
    })

})