'use strict';

/**
 * lw_dynamic_book
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_dynamic_book.js  start...
});

describe('test app/service/lw_dynamic_book.js', () => {

    it('should create a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.create({
            Id: Id,
			BookId: "Xio0EAbOBtdh", 
			ImgGroupId: "gG3F0t01SYlrVEeDt", 
			Content: "41UhSjXwXJIywd4nnmBy7IHKFSklpdcHuKVfVviN6Vg70oZdNhTpRfXieulwdnW9iGXyx0do2W8HVdcGn6YRVJN1ObYSOmxGp8CwZcRUVroo0zxvxCgkCObkxTaC4Ohig3Yzn5bV34eXMXSKaIbqFF0dintWhyWte6gtZz9sn9rMdFfNgZUvYaF28TWl3xRqxAFUCRP54Z7FPkBWkyGD2L0LhRnyiBgbmmkKHBgZ607j9xYfEGHMp1h8VcLmmCXywcGUHq2tUEivykkkgfK1x4cDoH1IGmnE1NkHHZBVo83nj7WKUvjCC9TLnq7hlr64QqOUHx6FEalyKIpolFlsldq5f3wYVb6pvaTcLDRnArRQBvxeaLwxkI8D5A10yITVVzsWmvRM7zN2ItY5EJ98C8CVYmk6S1tJ7wvjhrKjDXmr0Ew67U4nLIogJVzwxxtnEEyxfyXTccnbQTtbfJDXyRNM28X0z1KjnNnl1blPE3pjI8onaJTjxFXrURlfwgjq0bhf17v8Z5U6ZjmMqSRHEB7vkZ3D7uT6pknbg9K3RWU33pVbGYzkTWOUMchYod4Sx2rHNrrce5kctCndnB9d9PWJkEBAp36argQc5vzRFWwizRt8Pn2datm9FH4w36JZo38INl5kvrrI6uoG61NAExFfs8uTVrZrcudkfSgRvJZ8tdIxjw7La3cujxYYU6wgjiVHE", 
			Remark: "FTlbnbhNLof4LLYWjJVmwGNaM9yOizLBOU3P", 
			Province: "R6agysS2MsmMm3kyODsPbl5tZF6Qm3GGO7uhxZI29DbksvJAoPArWk0dpepA6HcTv0xpyWPxeJyFn8Xt", 
			City: "9wg7XX039zmi2TdQ6zgzXnHoo4f", 
			Valid: 1, 
			CreateTime: "Mon Jan 15 2018 17:16:19 GMT+0800 (CST)", 
			CreatePerson: "oVn7YvmuhyXe244ud9lsi48zo3mrYOA8Qz3vJQOaeMRrxMSxwkot2I9nWmkeWlKp3vit2bxr4EHtsb6k4aehpSMn8nmeH", 
			UpdateTime: "Fri Jun 01 2018 16:20:21 GMT+0800 (CST)", 
			UpdatePerson: "dQkn5qcF7ebnKGn6PggTHwtyUvhJ3wmr11HnvhbzZ6LJyA9UDlRkZG9bo2laKZxlM4Pmu9eqiui1zP8tcYHCOceJMHB5sa", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwDynamicBook.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwDynamicBook.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const removeEntity = await ctx.service.lwDynamicBook.remove(entity);
        const updateEntity = await ctx.service.lwDynamicBook.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_dynamic_book entity', async () => {
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
        const entityList = await ctx.service.lwDynamicBook.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_dynamic_book entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwDynamicBook.getById(Id);
        const result = await ctx.service.lwDynamicBook.delete(entity);

        assert(result === 1);
    })

})