const { User } = require('../model/User');
const { StatusCodes } = require('http-status-codes');

exports.createUser = async (ctx) => {

    const { name, age, cpf, email } = ctx.request.body;

    const user = new User(name, age, cpf, email);

    if (age < 18) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'Age must be above 18';
    } else {
    
    }
}