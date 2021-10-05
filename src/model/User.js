const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema
({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    cpf: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);
class User{
    id;
    name;
    email;
    age;
    cpf;

    constructor(name, email, age, cpf){
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.age = age;
        this.cpf = cpf;
    }

    async create() {
        await UserModel.create(this);
    }
}

module.exports = { User };
