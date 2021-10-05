const Router = require('koa-router');
const koaBody = require('koa-body')();
const userController = require('./controller/userController');


var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`; //http://localhost:3000/
});

router.get('/users' );

router.post('/users', koaBody);

module.exports = router;