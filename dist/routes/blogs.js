"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogs_1 = require("@/controller/blogs");
const blog_schema_1 = require("@/schema/blog.schema");
async function routes(fastify) {
    fastify.get('/', { schema: blog_schema_1.getAllBlogSchema }, blogs_1.getAllBlogs);
    fastify.get('/:id', { schema: blog_schema_1.getBlogSchema }, blogs_1.getBlog);
    fastify.delete('/:id', { schema: blog_schema_1.deleteBlogSchema }, blogs_1.deleteBlog);
    fastify.post('/', { schema: blog_schema_1.postBlogSchema }, blogs_1.addBlog);
    fastify.put('/:id', { schema: blog_schema_1.updateBlogSchema }, blogs_1.updateBlog);
}
exports.default = routes;
//# sourceMappingURL=blogs.js.map