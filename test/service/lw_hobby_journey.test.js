'use strict';

/**
 * lw_hobby_journey
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_hobby_journey.js  start...
});

describe('test app/service/lw_hobby_journey.js', () => {

    it('should create a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.create({
            Id: Id,
			StartTime: "Thu May 10 2018 18:29:31 GMT+0800 (CST)", 
			EndTime: "Mon Nov 05 2018 02:21:40 GMT+0800 (CST)", 
			PointOfStart: "qASgrqZdKdzW3XOulVXxSqNufHouyckRzoPGhM", 
			PointOfEnd: "8wzLXrZjI1JB", 
			JourneyId: "s", 
			ImgGroupId: "76RhxJVEIE2wedE2dX", 
			Describe: "C39vympbHVeLwPJEPYIskPLZI5xE011I74FoRVgIW30z07ipwGLNq4dcVk9HzBo1eb4uM7m89aJusNBvIJSfCADNb2VNoA14H4bv6miizDHC4pBTAt7H1AocgrQHKyVe0Hbz0oGJsxrs1L29ULkqID0pPHUDgORLnCtDGH9WnLnQZFuFhSxyieGklDm5dREoyokFDpVQoI5a8WehZeUXhnCZw7Ibtjsn2UA8znaXABT3Tpw6tO6rtqNXvJF40HP9oGeLOflkmCOoGlgZNJO5nBpipvavBqYQ3ztaeVoNzRKrMfc8f05XQToHdsTrXiiZcL01WkCxIS9j7nPgnG8shkqhYIlClYAJCmMbA36FFJsD6CUODJKhofuGvoywbWYhOrkQetUGARHkVRJYNSS6qQNleNuD9ymUpjuYtaH9ZDsucavch2zjEGApOEcY33JMbCXoJdx9uHKwXr5PVAoNSgKCp6oh1ZQJL4UL0QiQrFJzukB0J4EogrG7xuhV2u2CoKL13UJLGSDdATgec4vSzvRNpArkkUDgV7nZlQsd1EgKS9gVadbCLZMyTL2Y5d9HaMJT9wb3UsWhYnHyJIFtVp6bnW7LfTzoSTq5YhxuTzHWnBkkgyVn8pvQncg6kB6w4V1TbhdWaM41W2cdc1wxHQH8dMeOsOJFnPQZFLbV0IaGWwqHaeTW6LJnDLBNAHjSKnZwmzLQVx5gAfghLk6FbTpidD9xpqlIm3lQc9iVNRXw9PNjmclIy", 
			Remark: "sOAmFl9OxIasMuAXV", 
			Valid: 1, 
			CreateTime: "Tue Aug 07 2018 03:06:16 GMT+0800 (CST)", 
			CreatePerson: "BrEAJGNOFPQHKSba6cabE1pN0Ow", 
			UpdateTime: "Fri Aug 17 2018 00:38:27 GMT+0800 (CST)", 
			UpdatePerson: "T7xdDxMdZtom2pHSXhELyWSnsofwLqYVZAYbRfeXQZ2KSvqJZZgsyAFIP2gJlDMgOb29dSe5Su9M10Ww", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwHobbyJourney.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwHobbyJourney.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const removeEntity = await ctx.service.lwHobbyJourney.remove(entity);
        const updateEntity = await ctx.service.lwHobbyJourney.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_hobby_journey entity', async () => {
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
        const entityList = await ctx.service.lwHobbyJourney.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_hobby_journey entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwHobbyJourney.getById(Id);
        const result = await ctx.service.lwHobbyJourney.delete(entity);

        assert(result === 1);
    })

})