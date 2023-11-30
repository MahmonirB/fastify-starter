FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json tsconfig.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Running app
FROM node:alpine

ENV NODE_ENV development
USER node

WORKDIR /usr/src/app

COPY package.json tsconfig.json yarn.lock ./

RUN yarn install

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8080
RUN yarn start

# docker build -t fastify-docker .
# docker run -p 8080:8080 fastify-docker