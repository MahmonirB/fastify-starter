"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const env_1 = __importDefault(require("@fastify/env"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const logger_config_1 = __importDefault(require("@/config/logger.config"));
const swagger_config_1 = require("@/config/swagger.config");
const env_config_1 = __importDefault(require("@/config/env.config"));
const cors_config_1 = __importDefault(require("@/config/cors.config"));
const blogs_1 = __importDefault(require("@/routes/blogs"));
const blog_schema_1 = require("@/schema/blog.schema");
const models_schema_1 = require("@/schema/models.schema");
const common_schema_1 = require("@/schema/common.schema");
const app = (0, fastify_1.default)({
    logger: logger_config_1.default,
});
app.register(cors_1.default, cors_config_1.default);
app.register(swagger_1.default, swagger_config_1.swaggerConfig);
app.register(swagger_ui_1.default, swagger_config_1.swaggerUiConfig);
app.register(env_1.default, env_config_1.default);
app.addSchema(common_schema_1.paramIdSchema);
app.addSchema(common_schema_1.messageSchema);
app.addSchema(models_schema_1.blogSchema);
app.addSchema(blog_schema_1.getBlogSchema);
app.addSchema(blog_schema_1.getAllBlogSchema);
app.addSchema(blog_schema_1.updateBlogSchema);
app.addSchema(blog_schema_1.postBlogSchema);
app.addSchema(blog_schema_1.deleteBlogSchema);
app.addHook('onRoute', (routeOptions) => {
    console.log(`Registered route: ${routeOptions.url}`);
});
app.get('/', (_req, res) => {
    res.send({ messgae: 'Hello World' });
});
app.register(async (api) => {
    api.register(blogs_1.default, { prefix: '/api/blogs' });
});
app.listen(3000, '0.0.0.0', (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server is listening ${address}`);
});
//# sourceMappingURL=index.js.map