/* eslint-disable @typescript-eslint/no-explicit-any */
import fastify, { RouteOptions } from 'fastify';
import cors from '@fastify/cors';
import fastifyEnv from '@fastify/env';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import loggerConfig from './src/config/logger.config';
import { swaggerConfig, swaggerUiConfig } from './src/config/swagger.config.ts';
import envOptions from './src/config/env.config.ts';
import corsConfigs from './src/config/cors.config.ts';
import blogRoutes from './routes/blogs.ts';
import { getSchema } from './schema/blog.schema.ts';
import { messageSchema, paramIdSchema } from './schema/common.schema.ts';

const app = fastify({
  logger: loggerConfig,
});

app.register(cors, corsConfigs);
app.register(fastifySwagger, swaggerConfig);
app.register(fastifySwaggerUi, swaggerUiConfig);
app.register(fastifyEnv, envOptions);

app.addSchema(paramIdSchema);
app.addSchema(messageSchema);
app.addSchema(getSchema);

// hooks
app.addHook('onRoute', (routeOptions: RouteOptions) => {
  console.log(`Registered route: ${routeOptions.url}`);
});

app.get('/', (_req, res) => {
  res.send({ messgae: 'Hello World' });
});

// Register routes to handle blog posts
blogRoutes.forEach((route: any) => app.route(route));

app.listen({ port: 3000 }, (err: Error | null, address: string) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is listening ${address}`);
});
