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
			UserId: "qS", 
			IP: "eQhs3Hs0lCWYAS9SWTnf", 
			LandTime: "Fri Dec 07 2018 13:36:21 GMT+0800 (CST)", 
			Province: "i64f6olUWXzYnpdFRg1t3ljX59KMpGaDAkiNId6RIcQuHpAYRV7O9AIm9sFF0Zw8TOvvZ5vGOrQE07xzOy3B1RWovBGLeBtk0", 
			City: "TTFxPiilMFZT", 
			UserAgent: "H3O0zBVZBNemVS4fRDOrkhLToYB0pP2Nrxwzxms7QcHMIQpgCtE0hMROXtzwk4F1zv9QDSdBW7VolHtZbyKs3kMWzYRM4NEuykkAROyg8uc6MOuI3ygRaTnqEj9ehdqsd3mzUSCbXQAidLVVwoMku8pG02TR93lsMYAnOziio2i8vMbuKkqYdZTPKbMHTfrOakbzq6fYZ3g8HdBLvFXou7wAvgisQkBon5vvC8diy5S3TzRgsbd5daWDYPWJ0HDRIsLWrX9RUPozVKxWiMS24cRyaNcpU7VmDDk6bwahRY19Wm2tKpWzJeKdR03ABfBQx5bA5zvzrC1kdUAKNaZuyLaaLWH06Rj6UUtwnxaCHid1jMCQDxhzEVTehPb34zl9JKJJ4xs69DObuvq6yPUWE1o6DtlGgwfLt0FGVvYM0mIKpHRfLF44HLxdrIIZeGRGJasmsL7FbKzOnk5P79GYRg66FjHNeiev23h58mOFo7jrrEERcKCNqKEzv8FI88aLuYxFvxzGCx7uixmSGagAqhiHN1T2rnC3TUSXEwVTN8MjXYKGXzSOHNkaqMCGs7OGkyVNlW2jLS3lZeUG31Y5lexgmPAYNb3SZ5tNgu6ijvmxx9D9T32r0aZIQ0khxBr0R2g9ma4wQH30IySqzcBLSoN8yCTgKQ8Mn46WB5IceHcf2sUYkMjdSrmf07mcD9qt23B2R1mHJQ8RzKyxB2HCOiZ1d8dG12MawEg6uQJqIz6495PL2TecJAaLYN9NDWKk3UCRbnEy7ag6nR912bOfR7m4RvdE0YAVfQ4J6qRz55AQnMqSIkmoUkT0ry99zEj8bpYE7veZycEpVKfLaDWRu4GHT2HF0NqbpEbeWnALudWmquBNxo4", 
			WebBrowser: "hNqppnUWBv33xqhQXOaygBzUTWoYPkrKHSWhRRt6b5Leso", 
			WebBrowserVersion: "uBEOVpuhG1LB6pW", 
			Valid: 1, 
			CreateTime: "Thu May 24 2018 05:03:09 GMT+0800 (CST)", 
			CreatePerson: "MJzctsQApBScgfN6ZJYbjgasZ6IcesOUjafPnnXk29NbiyDypd90EgyDEVqo85W6vytySMVgs7YxT4gPw2ugdcafQM", 
			UpdateTime: "Thu Sep 27 2018 16:51:14 GMT+0800 (CST)", 
			UpdatePerson: "avAwqeu6OcaYZTKeOmuDsTspt1HckaYjZv4xasMflQZsoNr8iVhzG", 

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