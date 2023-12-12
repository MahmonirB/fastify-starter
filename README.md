# Fastify starter
A node js project with fastify, typescript that provides blog services

## Features
- fastify
- typescript
- prisma
- MongoDB
- eslint
- prettier
- swagger

## Running on docker
 To run project on local docker, it's enough to build and run it with below commands:
  ```
  docker build -t fastify-starter-docker .

  docker run -p 3000:3000 fastify-starter-docker
  ```