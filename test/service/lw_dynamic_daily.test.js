'use strict';

/**
 * lw_dynamic_daily
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_daily.js  start...
});

describe('test app/service/lw_dynamic_daily.js', () => {

    it('should create a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.create({
            Id: Id,
			ImgGroupId: "g5ohD", 
			Content: "mv6DOpTAIOwLV2BsMkxhbW4RBktQCxJf75Dhrqs6VihpKqlD3hpG5kBPKzuT01yRhsauENaKexHDOAxfpmk8jDQna3DNHluauMOL4cIgP4NQ0SdqbqEXTdjHuxAJ3Key4IUYWSTLgbU7UdnSQwDFMTqvWQQMl6oVdssWBUMPjseaxXyEn4Dv6HqQikM3QpT81eU5lPx8rx4Q2nfgmJhYLBrCBMhrLGDnkrCl83W5TtfBBCp1bsDsEjNEizgqgXUvDMOI12ORrBXRHYlGzEAU7vUSb7mcOrSFt2qbjpaB4vgTdaF5xwfNgqjokSFa5cdlNMGgEuRSzVStQ5iW63z4GrL4HBFD9YSlyamcS3X0Ob3h4EUEWJNqTvOcbcK04DFRkmKsUy8doLEzb94o5Y8fWPEyAYFzPQRfU7EVqqpTdNeUZZtPmP1owwghfOSesHQxtW9yVXDzZfEiAWw5nIony6FJ9STkJR7kxLahFzZ6c0mztDctplh7A7sfYyDHDR9e8tQkMnQXDfuL3VJSpLaHaiKo6MDmFEIGIhCilKL3KUeb10QtqMfkdPTmuIWBQ2oqpZ7Zx0W1Qza5RPGIttkYuqU0h24Cf9uiLOuZ13L94F4FR8LTm5EwHeD8UONcr167Ozym7FMoinYEeu0LHt4S7tfnsppAnjY6e3K57Sl1gknSbiz1YGfPT6CMDW3g1OkeZQebDr1i5TerfmlpRsyNt9suxZTfNUOJc3NuI57qNh6MeE99jYB21RokHXPCfjdPfjAXOHwEoLUaMde6z6DweXfsWEuQVzLWFFAO2fOw9gXdLkgrYmiZh3EklT3OnK1PYlTeQombklqbmyG30", 
			Remark: "wN4bImUAWaclTTlvL5EluMMhHu3m6aLCQaV86BSrQQBbQZ1Cd", 
			Valid: 1, 
			CreateTime: "Sat Jan 13 2018 15:41:56 GMT+0800 (CST)", 
			CreatePerson: "oGnyyw6r63IiiUA9yM9byQaBxzaJY869BHCDtK0JoCwEzai0lRYgNR6eKIKXwqCV9RKQSCKX", 
			UpdateTime: "Mon Nov 19 2018 19:53:06 GMT+0800 (CST)", 
			UpdatePerson: "Ybh", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicDaily.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicDaily.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const removeEntity = await ctx.service.lwDynamicDaily.remove(entity);
        const updateEntity = await ctx.service.lwDynamicDaily.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_daily entity', async () => {
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
        const entityList = await ctx.service.lwDynamicDaily.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_daily entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicDaily.getById(Id);
        const result = await ctx.service.lwDynamicDaily.delete(entity);

        assert(result === 1);
    })

})