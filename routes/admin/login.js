var Router = require('koa-router');

var router = new Router();

router.get("/", async (ctx) => {
    await ctx.render("admin/login");
});

module.exports = router.routes();