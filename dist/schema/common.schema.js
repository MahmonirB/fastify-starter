"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramIdSchema = exports.messageSchema = void 0;
exports.messageSchema = {
    $id: 'messageResponseSchema',
    type: 'object',
    properties: {
        message: { type: 'string' },
    },
};
exports.paramIdSchema = {
    $id: 'paramIdSchema',
    type: 'object',
    properties: {
        id: { type: 'string' },
    },
    required: ['id'],
};
//# sourceMappingURL=common.schema.js.map