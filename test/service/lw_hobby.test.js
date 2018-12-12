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
			Name: "2Qm1xrog0s7ca", 
			Describe: "HRGN8snl2Rsd4vg0X35GrdmQWTwsNT9WaYHCUtUocIRUVw2GuyDSeWwiqDiVYnXnSBAOmeQdPKHo1v0C61UqqNP5IX1Qv17L9HJcIoO4TqUQWfXkSThyG9LQsgjOUuEoZ3LW9N2EF0gzWgTdOQwxRFRziTdPNOp3JaPs6SM4AOspUGruoUZnAphPfSmjfZAXCSFdwO7rTD7OZs8niRvQqgNPUmX5GQiT06IY1Mrr0lc9YVjzGE1BnSV5BDVXfB2wSnZyhbIDRnefo1xeS0EhaAueXexNfmH6YKiqtkdrUrI3JTXDHLY0G2wSYj16XTUaU3wSm5DD8Jv4KhZw9Dx9VbcNHOCStAZZHxF7kWHAbfwCTC0lSn2vXiMvbk0m4urOHbYp7xXZi1euhXHfNQhbeuGBIJ056qkLAZg4hsJoPIGsjtXScNxnf8n8iWG9uaQivTu5vCUuITB06yfp43H12S6m8ywVF8Xf8PS4XQLNoBKVd2Rt81NGigoVMESYqwnJZPgD1ZQJkT732qeCbXUflXe3Ajhpp6zn0UrEObDcMHaSfZelyspacipIoe0SzqJ2icGnhPAsGa9mw1Xf72VJu7fDqdl6uDv0LzzzHn4elFJ1tMfly27kWWMCQPtPn5NXHy9MDBXAq0JyEHfshVbQb7Wq2aWnusV1yTLdUIsOqh0wcEMd9ytr1XyNQoKYPoBi4T4R0DFKGd48Y2CGAoF5GA4LUVZn9VGyvGIaF0KIPDhI0mSdmXgam35SZM1IfrvUHV8kxTBglBYJ860NMB0K2guqhebpZOvlmBE8e67MDZ4", 
			Sort: 8, 
			Valid: 1, 
			CreateTime: "Tue Mar 20 2018 09:15:09 GMT+0800 (CST)", 
			CreatePerson: "NboO86QrSmUTbjURrzKr0XPPEfxtavjrtD0fCKgHotZ0PCfoDbqG4Q2aFNXQutrRHl", 
			UpdateTime: "Mon Nov 19 2018 13:42:33 GMT+0800 (CST)", 
			UpdatePerson: "1JJbNlkhmNXKv0ZGUriwmkV53aqteQodlXKzpOcTEvp5aMlinAji3yyd1PX0AvooJPyRjr5TCwm", 

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