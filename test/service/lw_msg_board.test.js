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
			UserId: "zVILNY6pCyDQj1NOz", 
			Content: "FeN3rhiGfxQIDF8Oi1ZnTMx1prBRvClcnrwaZ9puC6LTXkKagwHlzsbeIy8IWeoxOyxhdaCiojvrg3jlvVCDVKI4Ie4WuQ6MKFDNQvzRJLQ1obvNjjl3St4S2kBhIIaXAQXv0TVTGoWjd6in9CeS6cDbcqRkZff1964cdvFONOCbaAUbwldXKDcPpBIIRRn9sFtECVnpGF9w2undmLkBN2Ga0SYhJ57DXEMY9sPKR8kET7aa7xq2zbBLM0RNwVHSVPz6rl4ONC2psrqubbZqzFjSoEffGVrjzoCpwOpILkO1goZkQXE9oic0htePwDeNUZNjbctOZpOv0v8kC5k8RyX4VWisKR22mJS7uPsLtypc0SIhQNqppLpB5w7M0d0PQu9v3KncnKmH1DrPzgdVG5gHgmylMGuCvZnLiDkKGBqg9Q0c0cBHRBbro8WnicHad0o4QDSROCmO5YIwqPe4thGvXt08wI340V7mmgQEwDugfP4RKSLUWsuKXpeU8U2Z7Dk8dptOHX4p3F4VTdeN4lSlrHurgIxfmcjA021tYRq1BGUjXK1iKShmGWR1Ilajq3PNEtPat94N9jRuROXkXNPA6PQ9WRPRZq34yBpZIP7JzZc7wofj2NOIt1Lkt7TlcNGsROneN1LXYDon0X2yQN0VeQ9lEge0ZXI4GlKvSUYGL0IvFoZ3N7IcqQIZ9rtWbjGEWuptURRFuZpzEJWgGWFv8W4rUhBEtnFYnSvMomGTKmC7F87Knahky0eIkaGgXyxYCK7Wiy42mduWvbrV4AXhIJsGxvbHy7e6xhvdYzBT2ulsom3fLgN4MQzpCTGX5OMNEFT8oGmjcP1xtvI2bseB6vIxni1LuG8ah0PNpofAZ0YXQu1X1jmaJFdMIFkHNiCf3Ua6ZQeCKksJjN3zUDXZ2HmcosI6rLjgJvhnBJ", 
			Remark: "UyhGY3p5HKjXWZuNmgAAx5nDcMMAX97KNKlyAMwKuOt", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Mon Jan 15 2018 13:15:23 GMT+0800 (CST)", 
			CreatePerson: "Op67Gd5DxyYwtjZicFUIjp9uDlnogeoktKeLQk3noLAnMfLy7a9bf0EWww5rcmUpnUXU31o2RfZqcyAi", 
			UpdateTime: "Sun Dec 02 2018 10:56:08 GMT+0800 (CST)", 
			UpdatePerson: "hiiYbQjuBiQHrYMAdwSyiFW6Tp7kuIW71YQtJUFNrR4", 

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