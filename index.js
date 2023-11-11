const cors = require("@fastify/cors");
const fastifyEnv = require("@fastify/env");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const app = require("fastify")({
  logger: true,
});
const { swaggerConfig, swaggerUiConfig } = require("./src/config/swagger.config.ts");
const envOptions = require("./src/config/env.config.ts");
const corsConfigs = require("./src/config/cors.config.ts");

app.register(cors, corsConfigs);
app.register(fastifySwagger, swaggerConfig);
app.register(fastifySwaggerUi, swaggerUiConfig);

app.register(fastifyEnv, envOptions);

// hooks
app.addHook("onRoute", (routeOptions) => {
  console.log(`Registered route: ${routeOptions.url}`);
});

app.get("/", (req, res) => {
  res.send({ messgae: "Hello World" });
});

// Register routes to handle blog posts
const blogRoutes = require("./routes/blogs");
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
