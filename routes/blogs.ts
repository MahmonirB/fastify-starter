import { FastifyInstance } from 'fastify';
import { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '@/controller/blogs';
import {
  deleteBlogSchema,
  getAllBlogSchema,
  getBlogSchema,
  postBlogSchema,
  updateBlogSchema,
} from '@/schema/blog.schema';

async function routes(fastify: FastifyInstance) {
  // List all blogs, paginated
  fastify.get('/', { schema: getAllBlogSchema }, getAllBlogs);

  // Get one blog
  fastify.get('/:id', { schema: getBlogSchema }, getBlog);

  // Deleteing a blog
  fastify.delete('/:id', { schema: deleteBlogSchema }, deleteBlog);

  // Create a new blog
  fastify.post('/', { schema: postBlogSchema }, addBlog);

  // Update an existing Category
  fastify.put('/:id', { schema: updateBlogSchema }, updateBlog);
}

export default routes;
