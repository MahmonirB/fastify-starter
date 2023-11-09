const cors = require("@fastify/cors");
const fastifySwagger = require("@fastify/swagger");
const fastifySwaggerUi = require("@fastify/swagger-ui");
const app = require("fastify")({
  logger: true,
});
const swaggerConfig = require("./src/config/swagger.config.ts");

app.register(cors, {
  origin: (origin, cb) => {
    const hostname = new URL(origin).hostname;
    if (hostname === "localhost") {
      //  Request from localhost will pass
      cb(null, true);
      return;
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"), false);
  },
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

const fastifyEnv = require("@fastify/env");
const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
  },
};

app.register(fastifySwagger, swaggerConfig);
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

const options = {
  confKey: "config", // optional, default: 'config'
  schema: schema,
  dotenv: {
    path: `.env.${process.env.NODE_ENV}`,
    debug: true,
  },
};

app.register(fastifyEnv, options).ready((err) => {
  if (err) console.error(err);

  console.log(app.config);
  // output: { PORT: 1000 }
});

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
