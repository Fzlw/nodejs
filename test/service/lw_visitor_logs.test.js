'use strict';

/**
 * lw_visitor_logs
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_visitor_logs.js  start...
});

describe('test app/service/lw_visitor_logs.js', () => {

    it('should create a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.create({
            Id: Id,
			UserId: "3gB", 
			IP: "IJaLyzOY9HccQB", 
			LandTime: "Fri Oct 05 2018 23:27:40 GMT+0800 (CST)", 
			Province: "IJTgWJf5T1ARB1eNGx140c5qf4SNM27SpwBVEj1oWV442c8Vzwb7vbK2kyiyqKEOGWXQXmT9vytf15gy", 
			City: "BjAjiUXT9NM6yoHp1QJ3RBqmD860QZ1kLdi0", 
			UserAgent: "4ZjD91ar0wSoD5QTi09KSMURCeTd1mFjFlghT4n2gQg5aJDbh8is6Cph52cveRyA2ZL3bZcgIuhFYgIPeqTlv0nlimUsvoB16g0tSEohmEVDddrzsrWRYRG4lMSsl6Zq1cNI1PdNQyBXV6ySjLsoIM4KQ2VCKeuZNpE5W4UsShcbKsFlcRl5lmXUbRzHH4QJiclsjuY6CqQjS7rTevy22EMobb2BZkZNYUYgUItqp1aSVLR4djfjaqdDINb5VrR2VYaL0wvS2GzoCtgOqKqkCxpBairMsAzmfEslAkN4AdVMCLSuOamZaMsNlxng2IVMKAtIT83E9phYLfY02dsIMdVvj4QTut1Tx5xZBGpD8Qf7Z4vwQjd9UR4ex4i4QDXOL1tBgqbIZjswmKpMM68a8S7vx8UbPuP6sAvuiw9KxyAArY1EkmS909fvManTU9y07SGYPQHO0pBgkxi3GkVvYIHaNYdu3jlVLXBOWXq0RiRr0ozo0HyvVN1MY8EH2WdfNtCeGur3qo87r8PGEoqGrhCDD5lEavE24jPc0PTz8QhLsQHQMhyn1i4oQRKeTh7scAjXEB54UkkoCORRsoN2otD5EAI9VG7mbCtzjTRcLGwS6DEaQmNTV1GrxoVCK9zns28wm51soUh9TRStCSY2WT6jUzEHTjWg3RwePwpHqGGVsakqNiJ26VTFcQLu5y7B0z8nh8clC2SQwHoeG6Keq5azjkNuWtevR8tBHWQUGZss5", 
			WebBrowser: "ci6z", 
			WebBrowserVersion: "lYeWo4isn", 
			Remark: "yHh1ykX4PamHCuV4hzsPp0j1DWCtzujUWYJVr0T1yR4oUA1fvebCswszMXqeVlIwuM4eVOzmJHIYxDAQGBGGS", 
			Valid: 1, 
			CreateTime: "Fri Apr 06 2018 16:58:12 GMT+0800 (CST)", 
			CreatePerson: "HfmD3WCOfTa5JGyCM0jY4nUZI5GiSZvhxdXQob6GhlizW2jCcRksRb0hfhaFLGSDLo9BsAXlXCeJMMsIMKsmb", 
			UpdateTime: "Thu Feb 08 2018 19:59:18 GMT+0800 (CST)", 
			UpdatePerson: "vB14zNWISgtP5TYz6Vv6adU5Ho4FVU9bdqKCfgIzQd2KcLu7AG7RAsXupL3dSLYPDY2nW", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwVisitorLogs.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwVisitorLogs.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const removeEntity = await ctx.service.lwVisitorLogs.remove(entity);
        const updateEntity = await ctx.service.lwVisitorLogs.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_visitor_logs entity', async () => {
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
        const entityList = await ctx.service.lwVisitorLogs.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_visitor_logs entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwVisitorLogs.getById(Id);
        const result = await ctx.service.lwVisitorLogs.delete(entity);

        assert(result === 1);
    })

})