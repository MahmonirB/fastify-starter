"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
require("module-alias/register");
var fastify_1 = __importDefault(require("fastify"));
var cors_1 = __importDefault(require("@fastify/cors"));
var env_1 = __importDefault(require("@fastify/env"));
var swagger_1 = __importDefault(require("@fastify/swagger"));
var swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
var logger_config_1 = __importDefault(require("./config/logger.config"));
var swagger_config_1 = require("./config/swagger.config");
var env_config_1 = __importDefault(require("./config/env.config"));
var cors_config_1 = __importDefault(require("./config/cors.config"));
var blogs_1 = __importDefault(require("./routes/blogs"));
var blog_schema_1 = require("./schema/blog.schema");
var models_schema_1 = require("./schema/models.schema");
var common_schema_1 = require("./schema/common.schema");
var app = (0, fastify_1.default)({
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
// hooks
app.addHook('onRoute', function (routeOptions) {
    console.log("Registered route: ".concat(routeOptions.url));
});
app.get('/', function (_req, res) {
    res.send({ messgae: 'Hello World' });
});
app.register(function (api) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        api.register(blogs_1.default, { prefix: '/api/blogs' });
        return [2 /*return*/];
    });
}); });
app.listen(3000, '0.0.0.0', function (err, address) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info("Server is listening ".concat(address));
});
//# sourceMappingURL=index.js.map