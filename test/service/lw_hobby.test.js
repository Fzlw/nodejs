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
			Name: "l38UQbxoZkAa8ksdo", 
			Describe: "vcziClQwEVgn9lRNrFZWBzzILimEYV1o7XKWEQf4jp80ZBWko4TVVwnaSo6ZUmUlYSBh3d076KtgQcVQx4y1NSwMYZciTRmb9Yn9GYmN7wi2utag7sqlmwrtFwAhrvx9sl5SHrE3gR1JPzxPDTlCtRmnxxzZt73oNYyxUHXRNJdeZjZ02wWsSrRLUGXhlaTqSqjhNCV4103vHbnEXb10w8R2JjLdBsNsrBDXO2J4LQR78I9X1gzKlwaQKCSJd6sxyT6kuNApaiqBTZ0OwldOFV4d2kuWlAwOdvKyABq5QbRUfXy9Z5IsfLr1ULwVLxj5MlzVcc4eau7eYiBRMZE01BASd7OzIxuCk69qB9tiWeSF9aVARyqoQhLCvZsR2yCHQhx5R2qLqWXngUiOnULXc6KnJ71EgfnqKnO50LeSSPzhotml5yFjM7Ugyw4qXn45ThBXhPs05Dumx5dSJf1QF5P0Q6yYqjPtr7MpfIWprWxvK8T5cLVuF1hEJHq0cHE4NpELBqbn4hD4wGYy8qXL8u3FdZirCjFPVfxONLbpBCFQuT3Qmm7IJgReJ3RexJcXXju2qhTuqxfVwiIIpIfkTPFsTEs5aVQ64ynZSN46goVN3XbwFVftON0Ybz6HXD0LXKf9dx9yTv0aJqeFIzsyaqpEnUh5xPn41YSlCa2VKVDPOFrFp7wwloXfyXZCvM7ousl2UwnUl5TqPxDyEhAWNc4BA5i49moiNxYswblZ0IYDHNotMrB8H1rmJsS9dH0jmrYhXJ5CqxNK6THgjBMYgdYdS4PAenFZb5EbGGiljFnG5NmHxGdb5v8hHVHLRRuhmiB6OcAdPT937MvTP8TzBPxDXkgloNUo6J647OCgjd6m93pWysKY4AGlOQiIot3kPARDGQi9xSvnQSJOodqZVCtsHE4cHoZ5v1X7uakXXMd1RKJso9SuloXozZbTCfyNuFAG", 
			Sort: 10, 
			Valid: 1, 
			CreateTime: "Sun Aug 12 2018 13:32:11 GMT+0800 (CST)", 
			CreatePerson: "xfDU26v3lRYOtf947bkyuOXwvBx8K78zfeaQtZvnjxQsNrQcUDhjx13SAuxVcvVPEL", 
			UpdateTime: "Sat Jun 09 2018 07:13:14 GMT+0800 (CST)", 
			UpdatePerson: "k5Bxq6NsZEquxC", 

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