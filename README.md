# Fastify starter
A node js project with fastify, typescript that provides blog services

## Features
I used some prominant tech stack/packages in this project:
- fastify
- typescript
- prisma
- MongoDB
- eslint
- prettier
- swagger

In addidtion, I've applied configs for cors, environment variables, logger and swagger. I sat a husky to check some rules before applying commits with pre-commit hook.

## Running on docker

 To run project on local docker, it's enough to build and run it with below commands:
  ```
  docker build -t fastify-starter-docker .

  docker run -p 3000:3000 fastify-starter-docker
  ```

## Running without docker

In this project to run app and watch it, I've used nodemon in NODE_ENV development with `NODE_ENV=development nodemon`, therefore run it with `yarn dev`. In purpose of building app, run `yarn build` that is compiling app with `tsconfig.json`.
