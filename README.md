# Teste OZMAP

## TESTE

O objetivo do projeto é, usando o NodeJs, Koa, Mocha e Chai, fazer uma API que permita:
Adicionar, Editar, Lista e Remover Usuários.
Como bônus, a lista de usuário pode permitir paginação. (Não é necessário, é bônus)
O projeto base já possui boa parte da implementação pronta, incluindo alguns testes de unidade.
Não é necessário conexão com nenhuma base de dados, tudo pode rodar em memória.
Como bônus, pode ser adicionado suporte ao banco de dados sqlite. (Não é necessário, é bônus)

Para rodar o projeto base:

1 - download do anexo do email, descompacte em algum lugar de facil acesso <br>
2 - instale os pacotes do node: npm install <br>
3 - rode os testes de unindade: npm test <br>
3 - rode o projeto: npm run dev <br>

Não é necessário nenhuma interface grafica para este projeto. Tudo será testado via unit test, ou seja, você deverá implementar mais unit tests, usando o arquivo: /test/index.js antes ou após implementar a API em sí.
Como bonus, pode ser criada uma interface básica em HTML5. (Não é necessário, é bônus).
Como bonus 2, poderá ser adicionado uma documentação da api, usando open-api3 ou swagger: https://editor.swagger.io/

PS: O projeto base pode/deve ser alterado para uma melhor estrutura, especialmente se for adicionar controllers e banco de dados (sugiro sqlite3).
Podem ser adicionados novos pacotes/bibliotecas npm (porem, não pode substituir os já existentes)
