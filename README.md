## Description

Backend application for packing list app

## Installation

```bash
$ npm install
```

### Database
Postgres is used as project's database with Prisma as ORM.

In order to run database start postgres service in docker or colima.

## Running the app

First create tables in database using Prisma command.

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
