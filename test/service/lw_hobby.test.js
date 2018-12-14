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
			Name: "4Vz2tQCUmMPR56", 
			Describe: "lmVnIvDGwDDPOS4uJN7hevWB7LLGh3dGCD5cWIfXQJbGEqZyu8YVwLqRHZYJBP44mM4lcaB70RGMyc0KFNfRr81ez5X6lyQC7UNnzsBkwNfwjiFS4IwruP68Yh3EmLqgPQjUvyjeOhfezTpTyotJoEogMGDWfDfp4MJBomi2m472oEFQN3p44Gym5WSRWfTpHxfDrdr1vGBal1XFCksFcT8TFgBpDPaUyDUWndESPV00qLu7vv3Rhs2AOd56wmS97XauTfzwng6nii3CBG3rJMAKzYkXK79vHpPeSxjhd4GvUk0pPuocbiI7eV01NWZFTVZFXMNqmp1jIE4685js8wmbMA4ztk8xl56bCQRjN6OTRb1y4HmSRWpEOfDe4iK8oibhtvQyNDH4HsMTEQxcm7dWhEWawJG6vM8zDq8D42cGIkD6YGrZAos6kLX3cWnvwnbb6zcNg5Ap3lDI3EgKIs4k70YO115cPwbovQbFR9VWgdLx0uB5NPBMGysEaaPPHssqw6SGy1XsCBqLgjUj9azCcqahta1NJWTXnF9", 
			Img: "nFbQekPhU64Hl7BtPgavyosccpeDzpw0uc", 
			IsSelf: 1, 
			Sort: 2, 
			Valid: 1, 
			CreateTime: "Wed Jun 27 2018 00:07:30 GMT+0800 (CST)", 
			CreatePerson: "b8N8SNLlRYl", 
			UpdateTime: "Fri Dec 22 2017 18:55:34 GMT+0800 (CST)", 
			UpdatePerson: "Z1uBQoxqdDQi5Fyzoz3o1faeArNVAX8WLPlkkvo2OjHTon3ArI1d583OaGFI", 

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