FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package.json tsconfig.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/index.js"]

# docker build -t fastify-starter-docker .
# docker run -p 3000:3000 fastify-starter-docker