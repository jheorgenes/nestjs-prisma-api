<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

```bash
$ npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata @nestjs/config
```

```bash
$ npm i --save @nestjs/config
```

```bash
$ npm install class-validator class-transformer
```

## Comandos Docker
### Permissão para executar Docker

```bash
chmod +x .docker/entrypoint.sh
```
### Criando os contêineres com docker

```bash
$ docker-compose up
```
### Executando os contêineres (sem gerar logs no console)

```bash
$ docker-compose up -d
```

### Executando no contêiner (especificando o contêiner pelo nome) um comando

```bash
$ docker-compose exec <nomeContainer> <bash ou comando que queria executar>
```

### OBS: Se executar o comando "docker-compose exec <nomeContainer> bash" será aberto o pront do container e lá poderá ser instalado outros pacotes no container.

### Removendo (deletando) os contêineres criados

```bash
$ docker-compose down
```
### Realiza apenas a etapa de build das imagens que serão utilizadas

```bash
$ docker-compose build
```
### Lista os contêineres

```bash
$ docker-compose ps
```
### Inicia os contêineres

```bash
$ docker-compose start
```
### Paralisa os contêineres

```bash
$ docker-compose stop
```
### Reinicia os contêineres

```bash
$ docker-compose restart
```

## Instalando o prisma
### Recomendado instalar dentro do container criado do docker

```bash
# Instalação
$ npm install prisma -D

# Inicialização
$ npx prisma init

# Gerar uma migração prisma
$ npx prisma migrate dev --name init

# Abrir um client do prima studio
$ npx prisma studio

# O prisma generate comando lê seu esquema Prisma e atualiza a biblioteca Prisma Client gerada dentro do arquivo node_modules/@prisma/client.
$ prisma generate

# Depois de configurado a conexão do prisma no .env
# Crie os models Schemas e então
# Execute prisma db pull para transformar seu esquema de banco de dados em um esquema Prisma
$ prisma db pull
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
