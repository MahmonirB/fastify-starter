const app = require("fastify")({
  logger: true,
});

app.get("/", (req, res) => {
  res.send({ messgae: "Hello World" });
});

const cors = require("@fastify/cors");
app.register(cors, {
  hook: "preHandler",
  delegator: (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true,
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false;
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions);
  },
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
