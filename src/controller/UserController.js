const { User } = require('../model/User');
const { StatusCodes } = require('http-status-codes');

exports.createUser = async (ctx) => {

    const { name, age, cpf, email } = ctx.request.body;

    const user = new User(name, age, cpf, email);

    if (age < 18) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'Age must be above 18';
    } else {
        await user.create();
        ctx.response.status = StatusCodes.CREATED;
        ctx.response.message = 'User created successfully';
    }
};

exports.getUsers = async (ctx) => {
    const allUsers = await User.getAll();

    ctx.response.body = allUsers;
    ctx.response.status = StatusCodes.ACCEPTED;
};

exports.deleteUser = async (ctx) => {
    const { name } = ctx.request.params;

    const index = await User.delete(name);

    if (!index) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'User not found';
    } else {
        ctx.response.status = StatusCodes.ACCEPTED;
        ctx.response.message = 'User deleted successfully';
    }
}