module.exports = app => {
    app.beforeStart(async () => {
        // https://eggjs.org/zh-cn/basics/app-start.html
        // 可以通过这种方式将一次性信息加载到内存
        // const ctx = app.createAnonymousContext();
        // let ll = await ctx.service.sysperson.getLast('fd5448b2-bdd9-4e73-ad68-f854b4507e5a')
        // console.log(ll)
        // console.log('9876543')
    })
}