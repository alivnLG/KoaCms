var Koa = require('koa'),
    router = require('koa-router')(),
    path = require('path'),
    render = require('koa-art-template'),
    static = require('koa-static');

var app = new Koa();

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(static(__dirname + '/public'));

var admin = require('./routes/admin');


var api = require('./routes/api');

var index = require('./routes/index');

router.use("/admin", admin);

router.use("/api", api)

router.use(index);

router.get("/", async (ctx) => {
    ctx.body = "首页";
});
router.get("/news", async (ctx) => {
    ctx.body = "新闻页面";
});

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(7083);