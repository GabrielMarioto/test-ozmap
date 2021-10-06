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
    ctx.response.status = StatusCodes.OK;
};

exports.deleteUser = async (ctx) => {
    const { name } = ctx.request.params;

    const user = await User.delete(name);

    if (!user) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'User not found';
    } else {
        ctx.response.status = StatusCodes.OK;
        ctx.response.message = 'User deleted successfully';
    }
};

exports.editUser = async (ctx) => {
    const { nameParams } = ctx.request.params;    
    const { name, age, cpf, email } = ctx.request.body;

    if (age < 18) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'Age must be above 18';
        
    } else {

        const user = new User(name, age, cpf, email).edit(nameParams);
    
        if (!user) {
            ctx.response.status = StatusCodes.BAD_REQUEST;
            ctx.response.message = 'User not found';
        } else {
            ctx.response.status = StatusCodes.OK;
            ctx.response.message = 'User changed successfully';
        }
    }
    

};

exports.getByName = async (ctx) => {
    const { name } = ctx.request.params;

    const user = await User.getByName(name);

    if (!user) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'User not found';
    } else {
        ctx.response.body = user;
        ctx.response.status = StatusCodes.OK;
    }
   
}

exports.getById = async (ctx) => {
    const { id } = ctx.request.params;

    console.log(id);
    const user = await User.getById(id);

    if (!user) {
        ctx.response.status = StatusCodes.BAD_REQUEST;
        ctx.response.message = 'User not found';
    } else {
        ctx.response.body = user;
        ctx.response.status = StatusCodes.ACCEPTED;
    }
}
