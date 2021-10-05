const Router = require('koa-router');
const koaBody = require('koa-body')();
const userController = require('./controller/userController');


var router = new Router();

router.get('/', async (ctx) => {
    ctx.body = `Seu servidor esta rodando em http://localhost:3000`;
});

router.get('/users', userController.getUsers );

router.post('/users', koaBody, userController.createUser);

router.delete('/users/:name', koaBody, userController.deleteUser);

router.put('/users/:nameParams', koaBody, userController.editUser);

module.exports = router;