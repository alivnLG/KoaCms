var Router = require('koa-router');
var tools = require('../../model/tools');
var router = new Router();

router.get("/", async (ctx) => {
  await ctx.render("admin/login");
});
router.post("/doLogin", async (ctx) => {
  console.log(ctx.request.body);
  let username = ctx.request.body.username;
  let password = tolls.md5(ctx.request.body.password);
})
module.exports = router.routes();