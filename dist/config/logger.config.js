"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environmentConfigs = {
    development: {
        level: 'debug',
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname',
            },
        },
    },
    production: true,
};
function getConfig() {
    var env = process.env.NODE_ENV || 'development';
    switch (env) {
        case 'development':
            return environmentConfigs.development;
        case 'production':
            return environmentConfigs.production;
        default:
            return false;
    }
}
exports.default = getConfig();
//# sourceMappingURL=logger.config.js.map