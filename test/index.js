const app = require('../src/index.js');

require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');
const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiJson = require('chai-json-schema');

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;

//Define o minimo de campos que o usuário deve ter. Geralmente deve ser colocado em um arquivo separado
const userSchema = {
    title: "Schema do Usuario, define como é o usuario, linha 24 do teste",
    type: "object",
    required: ['name', 'email', 'age', 'cpf'],
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        age: {
            type: 'number',
            minimum: 18
        },
        cpf: {
            type: 'string'
        }
    }
};

//Inicio dos testes



//testes da aplicação
describe('Testes da aplicaçao', () => {

    before('deveria conectar ao banco de dados', () => Promise.all([])
        .then(() => mongoose.connect(process.env.CONNECT))
    );
    
    it('deveria estar conectado ao banco', function(done) {
        chai.request(app)
            .get('/users')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(StatusCodes.OK);
                done();
            });
    });

    it('o servidor esta online', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('deveria ser uma lista vazia de usuarios', function (done) {
        chai.request(app)
            .get('/users')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.eql([]);
                done();
            });
    });

    it('deveria criar o usuario raupp', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "raupp", email: "jose.raupp@devoz.com.br", age: 35, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('deveria criar o usuario Gabriel', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Gabriel", email: "Gabriel@devoz.com.br", age: 22, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('deveria criar o usuario Stella', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Stella", email: "Stella@devoz.com.br", age: 19, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('deveria criar o usuario Amanda', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Amanda", email: "Amanda@devoz.com.br", age: 21, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('deveria criar o usuario Dirceu', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Dirceu", email: "Dirceu@devoz.com.br", age: 99, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('deveria criar o usuario Paola', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Paola", email: "Paola@devoz.com.br", age: 21, cpf: "43639238818" })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                done();
            });
    });

    it('Não deveria criar o usuario Vinicius, pois é menor de idade', function (done) {
        chai.request(app)
            .post('/users')
            .send({ name: "Vinicius", email: "Vinicius@devoz.com.br", age: 17, cpf: "43639238818" })
            .end(function (err, res) {
                expect(res.text).to.be.equal('Age must be above 18');
                expect(res).to.have.status(400);
                done();
            });
    });

    //...adicionar pelo menos mais 5 usuarios. se adicionar usuario menor de idade, deve dar erro. Ps: não criar o usuario naoExiste

    it('o usuario não existe no sistema', function (done) {
        chai.request(app)
            .get('/users/Raupp')
            .end(function (err, res) {
                expect(res.text).to.be.equal('User not found'); //possivelmente forma errada de verificar a mensagem de erro
                expect(res).to.have.status(400);
                done();
            });
    });

    it('o usuario raupp existe e é valido', function (done) {
        chai.request(app)
            .get('/users/raupp')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.jsonSchema(userSchema);
                done();
            });
    });

    it('deveria excluir o usuario raupp', function (done) {
        chai.request(app)
            .delete('/users/raupp')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('User deleted successfully');
                done();
            });
    });

    it('o usuario raupp não deve existir mais no sistema', function (done) {
        chai.request(app)
            .get('/users/raupp')
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res.text).to.be.equal('User not found');
                done();
            });
    });

    it('deveria ser uma lista com pelomenos 5 usuarios', function (done) {
        chai.request(app)
            .get('/users')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body.length).to.be.at.least(5);
                done();
            });
    });

    it('o usuario Gabriel deve ser alterado', function (done) {
        chai.request(app)
            .put('/users/Gabriel')
            .send({ name: "Fernando", email: "fernando@devoz.com.br", age: 50, cpf: "0101010101" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.be.equal('User changed successfully');
            });
        chai.request(app)
            .get('/users/Fernando')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                expect(res.body.name).to.be.equal('Fernando');
                expect(res.body.age).to.be.equal(50);
                expect(res.body.email).to.be.equal('fernando@devoz.com.br');
                expect(res.body.cpf).to.be.equal('0101010101');
            });
        chai.request(app)
            .get('/users/Gabriel')
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res.text).to.be.equal('User not found');
                done();
            });
    });

    it('Não deve alterar um usuario que não existe.', function (done) {
        chai.request(app)
            .put('/users/Gabriel')
            .send({ name: "Fernando", email: "fernando@devoz.com.br", age: 50, cpf: "0101010101" })
            .end(function (err, res) {
                expect(res).to.have.status(400);
                expect(res.text).to.be.equal('User not found');
                done();
            });
    });
});