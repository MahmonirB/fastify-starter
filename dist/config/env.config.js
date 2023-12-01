"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const envOptions = {
    confKey: "config",
    schema: schema,
    dotenv: {
        path: `.env.${process.env.NODE_ENV}`,
        debug: true,
    },
};
exports.default = envOptions;
//# sourceMappingURL=env.config.js.map