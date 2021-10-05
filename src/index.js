const Koa = require('koa');
const Router = require('./routes');

const koa = new Koa();

koa
  .use(Router.routes())
  .use(Router.allowedMethods());

const server = koa.listen(3000);

module.exports = server;