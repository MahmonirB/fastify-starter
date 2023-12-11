"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schema = {
    type: "object",
    required: ["PORT"],
    properties: {
        PORT: {
            type: "string",
            default: 3000,
        },
    },
};
var envOptions = {
    confKey: "config", // optional, default: 'config'
    schema: schema,
    dotenv: {
        path: ".env.".concat(process.env.NODE_ENV),
        debug: true,
    },
};
exports.default = envOptions;
//# sourceMappingURL=env.config.js.map