var Router = require('koa-router');

var router = new Router();

router.get("/", async (ctx) => {
    ctx.body = "前台首页---";
});

module.exports = router.routes();