const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema
({
    // id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    cpf: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);
class User{
    // id; Removi o ID pois o MongoDB já gera um ID automático para cada objeto criado.
    name;
    email;
    age;
    cpf;

    constructor(name, email, age, cpf){
    //     this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.age = age;
        this.cpf = cpf;
    }

    async create() {
        await UserModel.create(this);
    }

    static async getAll() {
        return await UserModel.find();
    }

    static async delete(name) {
        return await UserModel.findOneAndDelete({ name: name });
    }

    async edit(name) {
        return await UserModel.findOneAndUpdate({name: name}, this);
    }
}

module.exports = { User };
