/* eslint-disable @typescript-eslint/no-explicit-any */
import 'module-alias/register';
import fastify, { RouteOptions } from 'fastify';
import cors from '@fastify/cors';
import fastifyEnv from '@fastify/env';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import loggerConfig from '@/config/logger.config';
import { swaggerConfig, swaggerUiConfig } from '@/config/swagger.config';
import envOptions from '@/config/env.config';
import corsConfigs from '@/config/cors.config';
import blogRoutes from '@/routes/blogs';
import {
  deleteBlogSchema,
  getAllBlogSchema,
  getBlogSchema,
  postBlogSchema,
  updateBlogSchema,
} from '@/schema/blog.schema';
import { blogSchema } from '@/schema/models.schema';
import { messageSchema, paramIdSchema } from '@/schema/common.schema';

const app = fastify({
  logger: loggerConfig,
});

app.register(cors, corsConfigs);
app.register(fastifySwagger, swaggerConfig);
app.register(fastifySwaggerUi, swaggerUiConfig);
app.register(fastifyEnv, envOptions);

app.addSchema(paramIdSchema);
app.addSchema(messageSchema);
app.addSchema(blogSchema);

app.addSchema(getBlogSchema);
app.addSchema(getAllBlogSchema);
app.addSchema(updateBlogSchema);
app.addSchema(postBlogSchema);
app.addSchema(deleteBlogSchema);

// hooks
app.addHook('onRoute', (routeOptions: RouteOptions) => {
  console.log(`Registered route: ${routeOptions.url}`);
});

app.get('/', (_req, res) => {
  res.send({ messgae: 'Hello World' });
});

app.register(async (api) => {
  api.register(blogRoutes, { prefix: '/api/blogs' });
});

app.listen(3000, '0.0.0.0', (err: Error | null, address: string) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is listening ${address}`);
});
