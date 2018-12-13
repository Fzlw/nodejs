'use strict';

/**
 * lw_msg_board
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_msg_board.js  start...
});

describe('test app/service/lw_msg_board.js', () => {

    it('should create a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.create({
            Id: Id,
			UserId: "92iDDM", 
			Content: "MiJ4E4in1JOMotH8IAWmNb1zgIGB3QF5zHj9D3NpjTDsOEngq9n546j64yUCRxukQ0IE5apewxpCnRVPpSder5SDZCAX98lzsmYomA6FR3f9jTAxUEcSr51XXmhAZRNrlt48T7mzYR9u6Ang3L4uu02c4JkuG1LcMZJz16ZSdGEK4gdXY2HO6puvmrrWOwM1QKurO92TtWtNxa7l5zO7VpFPKICtyIDAK2RJMckU2lUpoH8FkGd6KdS5WdJMhbJHZKL76uQiuKQvxQBhroTMHv70u02aB2K25llsiU7Kgw15ZO0Qy1lYRl5Jt0TGyYxG5pdnV8tcRat6EE4lSCXhmXFxWwH1e3GYP55gus3xMeOrIddpS12QyRQ0NIpe2OjKoAUy6gWXnCqazZb77Ew1YnYEi6t391nxdodxNR7ouym4cFQ1UAAbmAS5mhseNLgyeizNygH4z434mC43bhWLaa0xEP0UNW07t8hERkTk4R2q9165uySh0YaYkDoHN275Z7Wn0ppU5VCKK7RNbbjaKy35NeoaMofBRAO5l2m7UsMbGMuruR48Y7zh3COINbubtneHgdQllJ0Ea11kkbkjUPa2AtsunSDigdPPBBEy6", 
			Remark: "uJiQj3cwxBv2EXoMNRlA9Thdqr1muPyT9WQXasMthqCfDDZKYYDoJIObZTKqob6AozTSb4TwLErFQZmPE4n", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Tue Dec 19 2017 07:11:37 GMT+0800 (CST)", 
			CreatePerson: "IwWlWfvAINSr", 
			UpdateTime: "Fri Sep 21 2018 08:42:21 GMT+0800 (CST)", 
			UpdatePerson: "QRQx", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwMsgBoard.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwMsgBoard.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        const removeEntity = await ctx.service.lwMsgBoard.remove(entity);
        const updateEntity = await ctx.service.lwMsgBoard.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_msg_board entity', async () => {
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
        const entityList = await ctx.service.lwMsgBoard.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_msg_board entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwMsgBoard.getById(Id);
        const result = await ctx.service.lwMsgBoard.delete(entity);

        assert(result === 1);
    })

})