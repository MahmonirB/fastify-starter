const swaggerConfig = {
  swagger: {
    info: {
      title: "RESTful APIs using Fastify",
      description: "CRUDs using Swagger, Fastify",
      version: "0.0.1",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

const swaggerUiConfig = {
  routePrefix: "/docs",
};

export { swaggerConfig, swaggerUiConfig };
