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
			PlaceName: "26xK4dLJ0w", 
			ArriveTime: "Sat Mar 31 2018 06:09:15 GMT+0800 (CST)", 
			Describe: "ZQ5Qg0jK6BoTi3D8SVgBQ5XVzYNUDe81FZmNRgmqjPkHdfzDVkJ7nBUkfbKWDNdZXuynbEIUgsMuUaWAa1FwuLxpdPbbXl8PFdvltgf79AA92H2HUmZsIIg90OG9UB4H4GJd1bRklN9pzX2D5AoE3TE3gAmEs8jQbPVsIzPvuyE0GBJL24OAUKNvGrioRGiQ6USghJrzRPwgbbYBfuOJL02gv7NXVbrOibcMXSgggHGQHxNA6ItQUf7D9wnlSExFD9P52Eq0Dx8p1dNBr1PqXaIT4XuoAZ1R1hoVkSiv2Rxn75k115d7FjLAVE9ZHRoX9YEcWSre38nhOpBr0n4wgB7ORDgoXihyWtDt8qz0UVuNJSdocUJ8K2TQuD64MQ9ENTLwEcZz5Qc5fYCHeyArqhsNHuiaKyFugIDeXpz0Ze1C7DIBMyYRK4wMHPUunmYvbyXqk0e3pZhwH4qs6UYOXSWs4CxlpfAbdHGpA6ZHEPQWllFI9VYJl8lcAi4XQj0pZ2IdGrbneLj81YnOlVwQTYVa2Q78LKgc9RX41kA6Sz2jMShmH4jApwCKASipD6P6Ypa1JS2Gq6T0j4vdFnWs5bvRku9XDmlCZOCQbECaewttv7LML04rQvuziIYbRu1524naVgwqG3p56uHZaoscFbewirLpCzniNxQbKiEQXUTBIjR67xAWwlWVqS5YeyGQeKI2OY5mw1Z3Zltd0iTtpEEyvbmyFSPcqD2E0ZXdr8tE01Wau49XAU8l0hKI5Ot1NbxTWIf4qMt9p49MsOSmRSIYKHLS4g92g4FdsxdaIuQUickyVltCengXafQAOdZfH7M3MgptNM7CBrhDt2mqel7JRrdf2Lm5SzU9Lhh1sc8rM7JxHMMAaJn2wDdjGLMLseKGW7lYezLpdlcaWqyFw7z844FeVhdcvMsKQFUDxvbdHXUJT1XfIh4KmAH7WZ6misQ2721uXUazVp22yGXFPnk5X92BCW4OjXV9GeFeRmfErPp7dPqETj16NQLY3iKG3ohluEexnSqbbmeHwpfP7dbet2GiMJ1serVQHrMAUV1xKXEA7hEgJNdpoFRQz4SPdQgDdbgabfR45jEGiwErnaJQ1b66ObDqH0lBSPED0lTLJU9mSQqaYgqTo9t3cNnEEI1KyNIgDJezpYp5WrtrjeAmwSoefGpQK2jxaHGBbDUSFHBWmTS4jPhfFu8gEaedprPObTpfbejrD7dbZfWvCyR4xXzYPuV78DYMM1thiytMgxWESLHgjUliIrQScGAVjVMuynkAtKwSyVDTT1cboKMSPnwKxflCnqYO4bp8Kn2EqATCduxCKESAQ7C9HsGo4QaJsAvqIMDZQlCQnIAO1RvQUXLD22QCa2kB1VJP2pxkIFwuPMIOG9HD4L20ptRi62vFGzNIzsePOzoeBuVkWfcZOU70MktKbJWSiC52s4ChXUcGfV7eu1QKfhphu4VCfgjHthHtlZXzmFv7KgySsC1nacloFu36Q4arUuwHn21uJSuzIpLS6oa1EUI9YzXXvMppA8LraQlP5aIrLbdp8MnR7Ff4AuvUwDNiSlXVmlfxNW4eDmmvcC4RPCJ9x2yDu4hLWySWPsC5mTvQYiMM5yM5XuXkQgCrxmHi5ou6MlVZtkbQOKbUHjfpSHjTeynIFgglBEZwVAXsOw8DmVsGzwXTnIh0zeYpaD53NRb7W5yxUdzPFTtclkb78VED28JLrye7PhPqDy3YgPlmQyQ19ehm5sihn1aRLdlLZzRZNCuxrwCwUT312wyiITIF47aHxUDGYa6vz0SoB6gsY1JIhB0ck232SgiA14gz2xJvAKwUO38KFXkB2YJ5qDZ7QyWLy8EyGigVFVPFxzO3K2zsGFBi27LzszIa4Gim35QL8ixwEGh6olkxCCTyrjPJypx8yf3oxRtuON3O1QweDPnchBzL4uXqhWSaIIrYD", 
			ImgsId: "nIsyW5JtOsnitohbnTHmBeg", 
			Valid: 1, 
			CreateTime: "Thu Jun 28 2018 07:48:42 GMT+0800 (CST)", 
			CreatePerson: "zapjqY5grkq6cGVKGVkvMcWlIPbvst7JFx8Q", 
			UpdateTime: "Sun Jun 17 2018 20:29:08 GMT+0800 (CST)", 
			UpdatePerson: "mXONwSMbp9Evr1pOWdjgPZKAXbtoqmgsDV4BxcoTPSxl2oBOixYBG39hYPYY92LNbAEzDAGuyIeo0yYzMr", 

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