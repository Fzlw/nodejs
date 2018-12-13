'use strict';

/**
 * lw_comment
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_comment.js  start...
});

describe('test app/service/lw_comment.js', () => {

    it('should create a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.create({
            Id: Id,
			DynamicId: "ewedRPsmU", 
			Comment: "TCiCY0N5QOk2mUk9Ny2vUjmAxDo2dFzPeudBRPFaUxI7rFNZGE0iosJibABktIs8GWr9gxnb9L5LvXhCOPezg8tW63KSY2AWOfRKxv1cwAgfE4Z3H5WpC4GFKOSAtFZUS18TAaHsJOTV6MKR8GnEVZtG0POEt7rcM0tBHIaa11qMkuKzEAq7ihqaz1Qh6mAW8iLTFsct6SAblauI9cff0r5FbTRJti3HT3z00fsUfsmNRU9oF7s1CGEJ3ZBrmUATqAcD0KBhcJQCuCpV6oGcOsAzZOi6DlIRz6mhy9VMGFEE3ZRfGX7KMyzkNu4HSOARdBgOB4zBjhDhCQRcfN4oFX1DyLG64TFMlKBprzHAbbPNLzv5CtYQYjzyVWIUTd5QLGMmdaVqwExxMDzjeyzXqxsS2LRGXxRJk44gO4qiJYRdcvn4NyHLzGi7bNHT4y5zOBCxVwZXo45DunlJS2Ofyae0wEzOVI4yXDVdGoc3uzyDarQBbnRTuSOqxcOuiuz0IK831vntBQYC0iNAH7MDu4eXQxMCNfkohisVe3RXxZywuItxgi7grdxFTiAWN9ytiqeDE3d5Vm2DhbjkUimnYJO7Iy2l9a8wohKjEZSJPLUWhjTlP1vUsXynfsalLJy7twGMP2szQivD9aVuxTFXgXRjZafZ8batLJ3rgksdiKeTxuABKr6dM7TNYsykgICdjvLGF6HgvSx7zK5rBGfm6YYSNzJEJAT3tIfcN4OprWylCrd3yULvRZ0fmFKIyhqPDC63XSv3agsGCt9VvDbsNo1TvsutRPDsuxbDcq3QysI5h5B8A4XiE4xc6rM", 
			VisitorId: "nN", 
			Province: "qg", 
			City: "CfBrZhqrujRnkbYRoGBUe", 
			Approval: 1, 
			Valid: 1, 
			CreateTime: "Wed Apr 18 2018 19:59:58 GMT+0800 (CST)", 
			CreatePerson: "4QYJ8dbzKJtdYmH5Hr3Z0xx8VSxdSkGjke0g", 
			UpdateTime: "Thu Jan 11 2018 17:04:18 GMT+0800 (CST)", 
			UpdatePerson: "KDSih8jegAYzeW1t8AwkTjTOqiyDjTh5cvnzaGuWSaGWp", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwComment.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwComment.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const removeEntity = await ctx.service.lwComment.remove(entity);
        const updateEntity = await ctx.service.lwComment.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_comment entity', async () => {
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
        const entityList = await ctx.service.lwComment.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_comment entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwComment.getById(Id);
        const result = await ctx.service.lwComment.delete(entity);

        assert(result === 1);
    })

})