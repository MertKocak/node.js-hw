const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Ana sayfa
router.get('/', async (ctx) => {
    ctx.body = '<h1>Index Sayfası</h1>';
});

// Hakkımda sayfası
router.get('/hakkimda', async (ctx) => {
    ctx.body = '<h1>Hakkımda Sayfası</h1>';
});

// İletişim sayfası
router.get('/iletisim', async (ctx) => {
    ctx.body = '<h1>İletişim Sayfası</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
    console.log("port 3000 çalışmaya başladı")
});