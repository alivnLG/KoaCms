var Router = require('koa-router');

var router = new Router();

var login = require('./admin/login');

var user = require('./admin/user');

router.use(async (ctx,next) => {
    ctx.state.__HOST__="http://"+ctx.request.header.host;
    console.log(ctx.state.__HOST__)
    next();
});

router.get("/", async (ctx) => {
    await ctx.render("admin/index");
});

router.use("/login", login);

router.use("/user", user);

module.exports = router.routes();