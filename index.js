const app = require('fastify')({
  logger: true,
});

const fastifyEnv = require('@fastify/env');
const schema = {
    type: 'object',
    required: [ 'PORT' ],
    properties: {
      PORT: {
        type: 'string',
        default: 3000
      }
    }
  }
  
  const options = {
    confKey: 'config', // optional, default: 'config'
    schema: schema,
    dotenv: true,
  }  

app.register(fastifyEnv, options).ready((err) => {
  if (err) console.error(err);

  console.log(app.config);
  // output: { PORT: 1000 }
});

app.get('/', (req, res) => {
  res.send({ messgae: 'Hello World' });
});

// Register routes to handle blog posts
const blogRoutes = require('./routes/blogs');
blogRoutes.forEach((route, index) => {
  app.route(route);
});

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is listening ${address}`);
});
