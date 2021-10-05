require('dotenv').config();
const Koa = require('koa');
const Router = require('./routes');
const mongoose = require('mongoose');
const koa = new Koa();

mongoose.connect(process.env.CONNECT)
  .then(() => {
    console.log('Logou no banco.');
  }).catch(e => console.log(e));


koa
  .use(Router.routes())
  .use(Router.allowedMethods());

const server = koa.listen(3000);

module.exports = server;