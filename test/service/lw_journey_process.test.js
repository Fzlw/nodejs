'use strict';

/**
 * lw_journey_process
 * autoCreate Template by LiWei
 */

const {
    app,
    assert
} = require('egg-mock/bootstrap');
const uuid = require('uuid');
const Id = uuid.v4();


before(() => {
    // test app/service/lw_journey_process.js  start...
});

describe('test app/service/lw_journey_process.js', () => {

    it('should create a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.create({
            Id: Id,
			JourneyId: "Ju", 
			Province: "V83LVVEzIDEyDvTusgXiRReCo4oSQkzIFz7bZVausEZ", 
			City: "niiNmQ2C1H87nAxVfntiqoUjHoI8jbAFNhbQYfriYWQdSMnIZPyRVhCerzfvE2iaeasH7hKLRtHqOUk", 
			PlaceName: "M46lfHd8OIZxbLTdHvSdf4TEJ0e4g4YNuNNdDj4f6S34pLPzo69C", 
			ArriveTime: "Sat Jul 07 2018 15:30:24 GMT+0800 (CST)", 
			Describe: "P9q5MK4NDSEzLp1e2BKRlKPCO7unOz3mCqjhcD6H0JzdWk0ip9QCmGCNpe74M7gzMJbWZCzlOmYOXKfX3QxOFWeoHIoXKY5VlEpRybPGHHIQ6Jp4z9dZ26GuL0vMkiPoHw9AOlCu0eMOptgOh8GwCtbZ6pssUzFEQifxluSYr6astlKJS3hWPnOAV4LoeGiVGjz9LJS76DxvYYFMTV1xtewf5bnnbfvwKOLgysQjVE0MekJYUlBOcLurGN0GSpC22JotS730H1KjMwUg4kjIzj84dkyPPPjgPxsJibMEk7ZbvdTxlkmSkl0OiGlZAHnr9Y7aPSo0A6ie5AWi01FHoKAidr03UDpj21vylckHsq5FdrHpsdE8YoPuUsvDeVNabdYrNEnkK7Rm1RPIub5wSf2DPzxo1ZUdzmYSVXoQ9NcwuH0g4qSGcINXkM1IPLiQOjttEnZivJOjLJdC519kZlXxBVN6afNc21DcVNF47LCJ8wiACR4kLJAbUlpphXlodI6JHBBOS44V6kTE93GVbPG7ulUcjPcdz6aGlPHqg86Tqkxngfte0VyIXAB5acqsKot0pMwr929NZdMoep4xYmJoSFJJJGJOulvTt5fm60qQagnb61gbchKl7oZsVsruKyYUBtwmhvzTsxsKYVCp9xjazz2LSIVRsWsSQSmI01nEFokqrXF5E25Ol99S994ZiIO0oWuRPpx5LMRXDm3khMPTlbMPkARMVfpNecsEic0dU7wUaltyjRFIbJNIgehnn8kJoqv7zk5vel3CRRHXuVIoFCZl1zDjP0Nk5Bslx6MSFwChgMnPRpMWMlnVVzngp5hmOQVyMMI5Rq5rrD5xpr4wbuGUsiW0rqLQNwb8woZ4t7WB0dtDgmsboUZQHVyLeL6anzVbMF7226Tp3HiMBw5uxVdBwd629C2LiECLTQ0LF7YwJrqsZS5qu7OE9QJtsUMIJwoFdt6QPuY50cJsn72oXAT9M4lpUEbEnoMrArD66xfXWLeRDrEnQG9J38xhJJ7XXhLFa0ey3yyJ7QW6pVSpjktBy9rCNvYUwMZNCUyTjLK8419SwIJuKv6J1zu78wAjTno2pHPuIsRAPDPoB0PcasBUXhpAwOzX95zc6TxaOgCQt7eBXCg4FSYWSofmdhwiDydDFI0wPnJ01K7v7oYmqBQWJ8HXC928PwpewEhXeRJKFf0Wa154a1K6fpg7PkdAWAJJm7dlZlZSU8aluiq9M4kZNR8iU1zUWZwsimVLXRmwbQsabvrhh4wWYaQiEfUn7cwTd6k07R1e4r8OYBjSANrqwWe5yfRLJZhxqPVVa07UNHQlm3XRcGtPI8fn1XzvNtjMxctiMgQhtddvhEgl7sE4zKdIPN1X487D2nUqoNfhJbayHSkSu8BqqrDJscVo36RARIBa8bihM0mZHCntmS2HEcjNwQxtktZOjWHgvaFXlMDZ7w3PxqVOh8DbP6qlBaieutRGe43kdIOSIP6Lrql67poT5SCsMUtUB0bid9yOrKA266VnR4OF11TzN7bManx13hw9x76QXpgw8xZF8q1WYmHkncQs1sKRecBvvhJyQollqJeDuG2O2FL7ThJ5oNqWwYJM5Tz0FNA4GDwTnJ64cPcpnxOZJzBaJNlHaxRoxbCjlhkryEdjPgfLxozomZ636pOZzLSe5TzgZ7FpHs6NZZO3c15MntpS6h4tVduyTifAThUy4OWRkEiTlFZgTqsFywLU7JtytP", 
			ImgsId: "9owBJSAdDsn8Mxo4v6xXcwJYffMeN8KZFd2kUXUGjEz8X6iYK1FsbbDuHgpZQsnOwa6puDgRk", 
			Valid: 1, 
			CreateTime: "Tue May 22 2018 04:19:30 GMT+0800 (CST)", 
			CreatePerson: "xsiOJSDS4PQa7gDvGKvU0cjOA7WTKXGVnQi9sbk9bX6RhuUTKRcXBil2w", 
			UpdateTime: "Thu Feb 15 2018 19:37:29 GMT+0800 (CST)", 
			UpdatePerson: "BecbnI0pRlVg4kufxhuwi2gWw7Es1FZT16mkx7IkMVqjj0L6yWyylQv7t9TWX4Pojr0fOfMaiHuKW1Z6wiav83q0", 

        });
        assert(entity.Id === Id);
    })

    it('should get a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        assert(entity.Id === Id);
    })

    it('should update a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const oldEntity = await ctx.service.lwJourneyProcess.getById(Id);
        assert(oldEntity.Id === Id);

        oldEntity.CreatePerson = 'anto-update value';
        const newEntity = await ctx.service.lwJourneyProcess.edit(oldEntity);
        assert(newEntity[0] === 1);
    })

    it('should remove a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        const removeEntity = await ctx.service.lwJourneyProcess.remove(entity);
        const updateEntity = await ctx.service.lwJourneyProcess.getById(Id);

        assert(removeEntity[0] === 1 && updateEntity.Valid === 0);
    })

    it('should get a list of lw_journey_process entity', async () => {
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
        const entityList = await ctx.service.lwJourneyProcess.search(pagination, where);

        assert(entityList.rows && entityList.rows.length > 0);
    })

    it('should delete a lw_journey_process entity', async () => {
        const ctx = app.mockContext();

        const entity = await ctx.service.lwJourneyProcess.getById(Id);
        const result = await ctx.service.lwJourneyProcess.delete(entity);

        assert(result === 1);
    })

})