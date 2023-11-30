FROM node:alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN npm install
RUN npm run build
COPY . .
EXPOSE 8080
CMD [ "node", "dist/index.js" ]