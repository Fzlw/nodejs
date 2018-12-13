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
			Name: "TR26PG2xed", 
			BirthTime: "Wed Feb 14 2018 06:26:15 GMT+0800 (CST)", 
			Sex: "6", 
			Introduce: "S2kZhaBPO1TkHGRUUSW5MgOLI8nYpfTvq4huOMksJ8BFBvdD7tGCKgnrhICbJzGIXlvXSAF65aKA8O0z0OgWqpWigF0Rikd12TlO7MBx7xCos3kFy2jEVahLAVSasYFbVy2R5d41VhbIq6UxzjzUPmEOJgF4MvbjAGM9GqmTbCcqUR1AYWmZXR2PDE86gE3sepiUBFjC3DHXVcIauuYaRbpKXwSGjWTVTRBaJh6djeBoRyKaFWgg6OSxiEWnOlqvso9XuNzDNTCgiL0Y3FwcKoZVOVGsAzPlZrKhzHHOKLTg7d8DnDpI5RzlHOooBggxIo5DcesQ6w7apBc2c23S9hA0QLb4v8y47BObz9h4TfIIw41foE8Agcpzqnh889F3h4Eq9Pm9QwVpCgAa5Wp1Pi9jzofGT51F9bOd2uwJefy25Gbmt012RKBu5F48UdvrdikhhIErDI6VBvikjymMCjjn8f80bEXMq7enT5lFUTbBV5IVG7tDpPqxRFAiCNtrzo5nyQpyo4jedeL2hnp0MTDtuS1g0qxGJizmK6XwZbqoo6pdHUnCPuN9guXuh8xhUlApf6VE4wnijrEQR9KjRWkxkbp5S1c63vMoXjmCLENJe3y2loPhMSoXGl8z8jOaBlZxlHbDgyIIhO3vxvdgT85YzKHu4T8kGzEeAars1Af9ZvLWK05XCKOsOGlVJPM6YkoyxWcvYigQ4YBoZ4j8qyUHaqeDZ6FU9RSpzAwYwX5lKXwfN4TVvFrVoZzdWKFIy6KtPR5MP9VvbCZlRXjESVTVPDZPlzoj0angtAtuLy208RzbAZQqPILTaJiy77x4LhJlJdLOJRK9YnbtAdSLdBev54RorLpQ4VddIKL0wYJpqOPaSohhdKEYK7Mf95AkH8tVV2CKBzuJDNcP5ELmPCL205UpeYMatFaRvpAXrWo2mM47Xbbot4WvvCC1tdujybNlOJjueTCJCBEfJ3GnD6oEzqBNDGCuulBMA2t7QWQwBKG1i89uS6qgPrHOsoxiZ598HPJe0X8JEqDafTtwkyUHIgc7BGdHRCDXqL7btOJrbeRbuEIFMtL36BkkxiIXszAPvJHrPoAJ5qYZZ3ksmOsfJ5Do9qHGW9Xx2MRpLOSJEujIjHp5pZu6KCdIo82xxejqOc2rHkotf6tjMHRziB2uUKNkY3Nfk1ItFrfyUTBTOrfTtnUJKUO7fUxIYl9FkYd9WQ6BQ0xDiCEICVU4zCnJD4qz1It3C3nfi1Y2vxjNAPn6bXx3noksxAsFZBYeCyihGom3Dyitf20EZrRImW5klEanLYXow7vhymkyEi4YwcRJqNizk3ZvKYwr3mNnQ915UW1S3f6sAmRsoT1Ay25NiaeM9k9InHPg3eWFr8cAQg0b1N0Wn90VdQGOkZkdH7U61mXAeyBOv5NlgX53uGOR5HOTtDDK3v1wR082akTq0jnmSN83OvsCeQjMVkxoFXsFxYVsGtaLrZN4lDZE5lX9H57XggTf1TJmWqHNNeYZFj8nxK5uXJnNhOjx9D6Pb64ExZZurG2dLIbvNmYhweFZWZBULQEbpyj78sPc0PduOEIo9kj6KecODNNZbGkq83smfQn81vPNfVGYwlh192BC5y5noEixZhnoZixr1MeQMn", 
			Remark: "2LX0NhSGYREr611PtGzwoqVZlHhq5sdOAzqpuPKDB", 
			Valid: 1, 
			CreateTime: "Sun Dec 17 2017 05:23:52 GMT+0800 (CST)", 
			CreatePerson: "H1BKwfgj7xpauAaPJ42905RYIpYZcJTznwHydwG", 
			UpdateTime: "Wed Nov 07 2018 15:25:20 GMT+0800 (CST)", 
			UpdatePerson: "jKo9peulG1M2Qvod9FYsFzxAEq3vzyZ4fluVW6oEShVzdrN0C5TE", 

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