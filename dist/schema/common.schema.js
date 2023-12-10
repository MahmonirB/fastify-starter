"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramIdSchema = exports.messageSchema = void 0;
// Just a single response object including a message
exports.messageSchema = {
    $id: 'messageResponseSchema',
    type: 'object',
    properties: {
        message: { type: 'string' },
    },
};
// Used to validate/match URLS that include an ':id' param
exports.paramIdSchema = {
    $id: 'paramIdSchema',
    type: 'object',
    properties: {
        id: { type: 'string' },
    },
    required: ['id'],
};
//# sourceMappingURL=common.schema.js.map