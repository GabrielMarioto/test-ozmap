<h1 align="center">

<a href="https://ozmap.com.br/"> <i>OZMap</i> </a> <br>
 
<img src="https://img.shields.io/static/v1?label=Test&message=OZMap&color=00e702&style=for-the-badge&logo=Google Maps"/>
</h1>
<p align="center"> projeto desenvolvido para o teste da ozmap </p>

<h3 align="center">
<img src="https://img.shields.io/static/v1?label=ReactJS&message=Frontend&color=61DAFB&style=for-the-badge&logo=React"/>
<img src="https://img.shields.io/static/v1?label=NodeJS&message=Backend&color=339933&style=for-the-badge&logo=Node.js"/> 
<img src="https://img.shields.io/static/v1?label=Koa&message=Backend&color=33333D&style=for-the-badge&logo=Koa"/> <br>
 

<img src="https://img.shields.io/static/v1?label=Mocha&message=Testes&color=8D6748&style=for-the-badge&logo=Mocha"/> 
<img src="https://img.shields.io/static/v1?label=Chai&message=Testes&color=A30701&style=for-the-badge&logo=Chai"/>
<img src="https://img.shields.io/static/v1?label=MongoDB&message=DB&color=47A248&style=for-the-badge&logo=MongoDB"/>
<img src="https://img.shields.io/static/v1?label=VSCode&message=Dev&color=007ACC&style=for-the-badge&logo=Visual Studio Code"/>
</h3>

---

<p align="center">
 <a href="#-teste">Teste</a> | 
 <a href="#-informacoes">Informações</a> | 
 <a href="#-pre-requisitos">Pré-Requisitos</a> | 
 <a href="#-tecnologias">Tecnologias</a> |
 <a href="#-autor">Autor</a> |
</p>

<a href="#-teste"> </a>

# 🖥️ Teste

O objetivo do projeto é, usando o NodeJs, Koa, Mocha e Chai, fazer uma API que permita: Adicionar, Editar, Lista e Remover Usuários. Como bônus, a lista de usuário pode permitir paginação. (Não é necessário, é bônus) O projeto base já possui boa parte da implementação pronta, incluindo alguns testes de unidade. Não é necessário conexão com nenhuma base de dados, tudo pode rodar em memória. Como bônus, pode ser adicionado suporte ao banco de dados sqlite. (Não é necessário, é bônus)

Para rodar o projeto base:

1 - download do anexo do email, descompacte em algum lugar de facil acesso <br>
2 - instale os pacotes do node: npm install <br>
3 - rode os testes de unindade: npm test <br>
3 - rode o projeto: npm run dev <br>

Não é necessário nenhuma interface grafica para este projeto. Tudo será testado via unit test, ou seja, você deverá implementar mais unit tests, usando o arquivo: /test/index.js antes ou após implementar a API em sí. Como bonus, pode ser criada uma interface básica em HTML5. (Não é necessário, é bônus). Como bonus 2, poderá ser adicionado uma documentação da api, usando open-api3 ou swagger: https://editor.swagger.io/

PS: O projeto base pode/deve ser alterado para uma melhor estrutura, especialmente se for adicionar controllers e banco de dados (sugiro sqlite3). Podem ser adicionados novos pacotes/bibliotecas npm (porem, não pode substituir os já existentes)

<a href="#-informacoes"> </a>

# ✨ Informações

## Client

Pasta destinada ao front-end da aplicação, possui o formulário de CRUD e listagem de usuário.

## Server

Pasta destinada ao back-end da aplicação, possui as rotas, tests, documentação e validações das informaçoes passadas através do front-end.

Foi utilizado o Axios para realizar a comunicação das API front e back-end. <br>
Yup foi utilizado para fazer validações dos dados inseridos no cadastro. <br>

<a href="#-pre-requisitos"> </a>

# 🎲 Pré-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/pt-br/), [React](https://pt-br.reactjs.org/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

##  Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/GabrielMarioto/test-ozmap.git

# Acesse a pasta do projeto no terminal/cmd
$ cd test-ozmap

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute os testes da aplicação
$ npm test

# Execute a aplicação em modo de desenvolvimento
$ npm start
```
##  Rodando o Front End (client)

```bash
# Vá para a pasta client
$ cd client

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start
```
<a href="#-tecnologias"> </a>

# 🛠️ Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [ReactJs](https://pt-br.reactjs.org/)
- [NodeJs](https://nodejs.org/pt-br/)
- [Koa](https://pt-br.reactjs.org/)
- [Chai](https://www.chaijs.com/)
- [Mocha](https://mochajs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Swagger](https://swagger.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Eslint](https://eslint.org/)
- [Http-Status-Codes](https://www.npmjs.com/package/http-status-codes)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<a href="#-autor"> </a>

# 🙍 Autor

<h1 align="center">
<a href="https://www.linkedin.com/in/gabriel-marioto/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50884596?v=4" width="100px;" alt=""/>
 <br/><br/>
 
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/gabrielmarioto)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/gabrielmarioto_)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-marioto/) 

</h1>
