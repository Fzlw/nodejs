module.exports = app => {
    app.beforeStart(async () => {
        // https://eggjs.org/zh-cn/basics/app-start.html
        // 可以通过这种方式将一次性信息加载到内存
        const ctx = app.createAnonymousContext();
        try {
            await ctx.service.updateService.updateSelfInfo();
        } catch (error) {
            ctx.logger.error('beforeStart' + error);
        }
    })
}