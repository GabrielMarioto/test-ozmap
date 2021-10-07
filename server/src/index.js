/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const Koa = require('koa');
const mongoose = require('mongoose');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const Router = require('./routes');

const koa = new Koa();

mongoose.connect(process.env.CONNECT)
  .then(() => {
    console.log('Logou no banco.');
  }).catch((e) => console.log(e));

koa
  .use(cors())
  .use(Router.routes())
  .use(Router.allowedMethods())
  .use(logger())
  .use(bodyParser());

const server = koa.listen(3001);

module.exports = server;
