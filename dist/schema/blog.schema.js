"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogSchema = exports.postBlogSchema = exports.updateBlogSchema = exports.getAllBlogSchema = exports.getBlogSchema = void 0;
exports.getBlogSchema = {
    $id: 'getBlogSchema',
    params: { $ref: 'paramIdSchema#' },
    tags: ['blogs'],
    response: {
        200: { $ref: 'blogSchema#' },
        404: { $ref: 'messageResponseSchema#' },
    },
};
exports.getAllBlogSchema = {
    $id: 'getAllBlogSchema',
    tags: ['blogs'],
    response: {
        200: { $ref: 'blogSchema#' },
        404: { $ref: 'messageResponseSchema#' },
    },
};
exports.updateBlogSchema = {
    $id: 'updateBlogSchema',
    params: { $ref: 'paramIdSchema#' },
    body: {
        title: { type: 'string' },
    },
    tags: ['blogs'],
    response: {
        200: { $ref: 'blogSchema#' },
        404: { $ref: 'messageResponseSchema#' },
    },
};
exports.postBlogSchema = {
    $id: 'postBlogSchema',
    body: {
        id: { type: 'string' },
        title: { type: 'string' },
    },
    tags: ['blogs'],
    response: {
        200: { $ref: 'blogSchema#' },
        404: { $ref: 'messageResponseSchema#' },
    },
};
exports.deleteBlogSchema = {
    $id: 'deleteBlogSchema',
    params: { $ref: 'paramIdSchema#' },
    tags: ['blogs'],
    response: {
        200: { $ref: 'blogSchema#' },
        404: { $ref: 'messageResponseSchema#' },
    },
};
//# sourceMappingURL=blog.schema.js.map