"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUiConfig = exports.swaggerConfig = void 0;
var swaggerConfig = {
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
exports.swaggerConfig = swaggerConfig;
var swaggerUiConfig = {
    routePrefix: "/docs",
};
exports.swaggerUiConfig = swaggerUiConfig;
//# sourceMappingURL=swagger.config.js.map