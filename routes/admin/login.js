var Router = require('koa-router');
var tools = require('../../model/tools');
var DB = require('../../model/db');
var router = new Router();

router.get("/", async (ctx) => {
  await ctx.render("admin/login");
});
router.post("/doLogin", async (ctx) => {
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;
  //匹配数据库 验证账号密码
  var result = await DB.find("admin", {
    "username": username,
    "password": tools.md5(password)
  })
  console.log(result)
  if (result.length > 0) {
    console.log("登录成功！");
    ctx.session.userinfo = result[0];
    ctx.redirect(ctx.state.__HOST__ + "/admin")
  } else {
    console.log("登录失败")
  }
})
module.exports = router.routes();