'use strict';

/**
 * lw_authors
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_authors.js  start...
});

describe('test app/service/lw_authors.js', () => {

    it('should create a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.create({
            Id: Id,
			Name: "PZ1jhF", 
			BirthTime: "Tue Nov 27 2018 00:08:11 GMT+0800 (CST)", 
			Sex: "h", 
			Introduce: "ICercMCxpd5Wv4uF9vJ69uj9yfmo9nQoHcoKJqeeW4QNOx3A9FzfXlLmQTdRReg2kKpgOTS5cUyMnN1sbHtYjzE9nostmUmn8HgbfmyQG8AnNmmEpdUb8l25v4wWC8mowdU0D4yzQIv9WdGAFnCTqchMhZiVnVagT3mDi76Pp0iqoQiQ0ggJ8E8RBtkGjKYCT06xK0E1BPQ4yvpB2yVsScVxeY9wqYbmJZpxbEh5dx4U5TAmczSYfzIRIlvYauOhSVj5RTCA58TjM0UxUpS1uwYArz64PhiBT3QAaHYvcoYn2kBXtb6ySUzI0I3G6cvRWlFaMI4ZH9D8DKMkeY5d0RIxg09AHo2yJtUjri156jEnMvnvN08MEoPiTGuOKpCdtVHemJaOwsceyIePDbjBKrDVF7vdSBRhVAfuI0QETBSuNb5ANRgQLJ3OW5k4uWan0qBE6SfQwzsIGFBhbL4jps3BceDPirMuUhpmy4BGn81Km5Wuh5L9sHt45yuPJC9KbynwGB00FZkzPVkmHHRDcyvulNAjsQK1zF1BVUyy3Id2XCmOkhiWk6LrokyNN1yllG80a9OXyIZV8Uc2eLepjVOWOOiXtkfZQZYkA2anrzJaOzSqlNblyARR42hoJrKaNPngbWztsMP5jlEE6TK0tCrf12dhA8wxtKVWoGyJ2fnPHkiFOIVFf4dos6PQ0swTsNqsNurma9Wvu1QFfpIP0oU3lcZyf5TEh4c2DtOeBzLHri9Icc9XJBBiZuWyyvzsyMUXWBpn4Y7BRIBs1aS993bVaaJ0gTlnAx04USWxOrhNte09Ii1jnvCfdU97SNmPGR9WtcHljhSuS0XZFZxhMst3rGkwMVtXjMWPs98L4KdZtsEDICZsqvxZ4EIa8uFbzPQuu2ASMXYl5IeqThDsaI8OHS23wKWbKfPxZlMVChJia1Yd8H8LpVPcrlT8XxBZvQlY5JzgA5mOrTYFu8bxNeY1V1n1wtW5I9YkDqbmd9hMgHzhnU7asNUgAjOyB4E9SgsPt7lW5A10q7FZD7EFGfOMqOBVPEFFgo4HaewCGMCLiERBMfKjriY5FN0N1VajZ2XxDMteCcltHbgS2wXc93c9Ke3mxJkdVDPCXyRbsHi3k64fSnIgImUuw9znAWWgo4DxW1tLq3ufVVxEHwd1rXuECEhn0gWv1IbHHlAwbB9UP1N93vI7a5fiBz5btK1cYoheoZHzxkNfvR4Fp7E7sfLr5jJ6WzhBrNZcAOJEs9VCK0ZSB1Kclq9UetQT1WgFkzhUBPKfE4GMucxNdu73ZdPgj0hFwiHVUb6Q", 
			Remark: "fid30OR2Ua2YjlGKNZxUYscjM4GKe0U0NUNzOcTYmbpEhOgfVB6kvSPWUvVwxopxFwoAVgMZ1vEYloKyBkjY9HT6o", 
			Valid: 1, 
			CreateTime: "Wed Aug 22 2018 03:53:23 GMT+0800 (CST)", 
			CreatePerson: "Q2FKI1PDV8376ue1S9wPrGphfOiVZ8XTIBcYoZJ7HcyX34oHx9h3rNfMolnjD5bWeZlEW4SgQGsJgtFg", 
			UpdateTime: "Sat May 19 2018 12:55:20 GMT+0800 (CST)", 
			UpdatePerson: "hXRtPDehCMvyqtIgzq0MIOML6Yn2v6ObhmFKADhtWBZQkw2P9jjrE3qnyyDg3BILyb", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwAuthors.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwAuthors.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        const removeEntity = await ctx.service.lwAuthors.remove(entity);
        const updateEntity = await ctx.service.lwAuthors.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_authors entity', async () => {
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
        const entityList = await ctx.service.lwAuthors.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_authors entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwAuthors.getById(Id);
        const result = await ctx.service.lwAuthors.delete(entity);

        assert(result === 1);
    })

})