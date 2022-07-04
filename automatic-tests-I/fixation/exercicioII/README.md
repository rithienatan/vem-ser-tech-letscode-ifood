# Pacotes utilizados

* [Node v16.13.0](https://nodejs.dev/download)
* [Express](https://github.com/expressjs/express) 
* [Typescript](https://www.typescriptlang.org/)
  * TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.
* [Jest](https://jestjs.io/pt-BR/)
  * Jest é um framework de teste em JavaScript
* [SuperTest](https://github.com/visionmedia/supertest)
  * SuperTest é uma biblioteca de teste que abstrai comunicações HTTP para testes de integração e end-to-end.
* [Nodemon](https://github.com/remy/nodemon)
  * Nodemon é uma biblioteca para realizar o LiveReload durane o desenvolvimento
* [node-fetch](https://github.com/node-fetch/node-fetch)
  * Utilizado para realizar comunicação com outras APIs (node não tem o `fetch` nativamente, é necessário instalar uma biblioteca para isso)

## Enunciado

Seguindo o TDD

* Escrever um gerador de Lorem Ipsum em uma nova rota
* O usuário ira informar a quantidade de palavras que a frase deve ter
* Construir os primeiros casos (onde os testes falharão)
* Implementar a biblioteca (onde os testes passarão)
* Adicionar novos casos (testes falharão novamente)
* Seguir padrão do projeto é obrigatório
* Criar os testes de unidade que garanta sua consistencia (cobertura minima: 100%)