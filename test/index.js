/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const app = require('../src/index');

require('dotenv').config();
const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiJson = require('chai-json-schema');

chai.use(chaiHttp);
chai.use(chaiJson);

const { expect } = chai;

const userExample = {
  '--v': 0,
  _id: '615dd0fca3ba62343e16ccf4',
  age: 21,
  cpf: '43639238818',
  email: 'user@example.com',
  name: 'Gabriel',
};

// Inicio dos testes

// testes da aplicação
describe('Testes da aplicaçao', () => {
  before('deveria conectar ao banco de dados', () => Promise.all([])
    .then(() => mongoose.connect(process.env.CONNECT)));

  it('deveria excluir o banco de dados', () => Promise.all([])
    .then(() => mongoose.connection.db.dropDatabase()));

  it('deveria estar conectado ao banco', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        done();
      });
  });

  it('o servidor esta online', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        done();
      });
  });

  it('deveria ser uma lista vazia de usuarios', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body).to.eql([]);
        done();
      });
  });

  it('deveria criar o usuario raupp', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'raupp', email: 'jose.raupp@devoz.com.br', age: 35, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('deveria criar o usuario Gabriel', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Gabriel', email: 'Gabriel@devoz.com.br', age: 22, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('deveria criar o usuario Stella', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Stella', email: 'Stella@devoz.com.br', age: 19, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('deveria criar o usuario Amanda', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Amanda', email: 'Amanda@devoz.com.br', age: 21, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('deveria criar o usuario Dirceu', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Dirceu', email: 'Dirceu@devoz.com.br', age: 99, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('deveria criar o usuario Paola', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Paola', email: 'Paola@devoz.com.br', age: 21, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.CREATED);
        done();
      });
  });

  it('Não deveria criar o usuario Vinicius, pois é menor de idade', (done) => {
    chai.request(app)
      .post('/users')
      .send({
        name: 'Vinicius', email: 'Vinicius@devoz.com.br', age: 17, cpf: '43639238818',
      })
      .end((err, res) => {
        expect(res.text).to.be.equal('Age must be above 18');
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        done();
      });
  });

  it('o usuario Vinicius não existe no sistema', (done) => {
    chai.request(app)
      .get('/users/Vinicius')
      .end((err, res) => {
        expect(res.text).to.be.equal('User not found'); // possivelmente forma errada de verificar a mensagem de erro
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        done();
      });
  });

  it('o usuario Paola existe e é valido', (done) => {
    chai.request(app)
      .get('/users/Paola')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body).to.jsonSchema([userExample]);
        done();
      });
  });

  it('deveria excluir o usuario Paola', (done) => {
    chai.request(app)
      .delete('/users/Paola')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.text).to.be.equal('User deleted successfully');
        done();
      });
  });

  it('o usuario Paola não deve existir mais no sistema', (done) => {
    chai.request(app)
      .get('/users/Paola')
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        expect(res.text).to.be.equal('User not found');
        done();
      });
  });

  it('deveria ser uma lista com pelomenos 5 usuarios', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body.length).to.be.at.least(5);
        done();
      });
  });

  it('o usuario Gabriel deve ser alterado', (done) => {
    chai.request(app)
      .put('/users/Gabriel')
      .send({
        name: 'Fernando',
        age: 50,
        email: 'fernando@devoz.com.br',
        cpf: '0101010101',
      })
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.text).to.be.equal('User changed successfully');
      });
    chai.request(app)
      .get('/users/Fernando')
      .end(async (err, res) => {
        await expect(res).to.have.status(StatusCodes.OK);
        expect(res.body[0].name).to.be.equal('Fernando');
        expect(res.body[0].age).to.be.equal(50);
        expect(res.body[0].email).to.be.equal('fernando@devoz.com.br');
        expect(res.body[0].cpf).to.be.equal('0101010101');
      });
    chai.request(app)
      .get('/users/Gabriel')
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        expect(res.text).to.be.equal('User not found');
        done();
      });
  });

  it('Não deve alterar a idade do Fernando, pois é menor que 18 anos', (done) => {
    chai.request(app)
      .put('/users/Fernando')
      .send({
        name: 'Fernando',
        age: 17,
        email: 'fernando@devoz.com.br',
        cpf: '0101010101',
      })
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        expect(res.text).to.be.equal('Age must be above 18');
        done();
      });
  });

  it('Idade do Fernando deve continuar com o valor anterior: 50', (done) => {
    chai.request(app)
      .get('/users/Fernando')
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.OK);
        expect(res.body[0].name).to.be.equal('Fernando');
        expect(res.body[0].age).to.be.equal(50);
        expect(res.body[0].email).to.be.equal('fernando@devoz.com.br');
        expect(res.body[0].cpf).to.be.equal('0101010101');
        done();
      });
  });

  it('Não deve alterar um usuario que não existe.', (done) => {
    chai.request(app)
      .put('/users/NaoExiste')
      .send({
        name: 'Maria',
        email: 'maria@devoz.com.br',
        age: 22,
        cpf: '0101010101',
      })
      .end((err, res) => {
        expect(res).to.have.status(StatusCodes.BAD_REQUEST);
        expect(res.text).to.be.equal('User not found');
        done();
      });
  });
});
