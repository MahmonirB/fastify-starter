import { FastifyInstance } from 'fastify';
import { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '@/controller/blogs';
import { getBlogSchema } from '@/schema/blog.schema';

export const getBlogValidation = {
  params: {
    id: { type: 'string' },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
      },
    },
  },
};

const addBlogValidation = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
      },
    },
  },
};

const updateBlogValidation = {
  params: {
    id: { type: 'string' },
  },
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: { type: 'string' },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};
const deleteBlogValidation = {
  params: {
    id: { type: 'string' },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        title: { type: 'string' },
      },
    },
  },
};

async function routes(fastify: FastifyInstance) {
  // List all blogs, paginated
  fastify.get('/', getAllBlogs);

  // Get one blog
  fastify.get('/:id', { schema: getBlogSchema }, getBlog);

  // Deleteing a blog
  fastify.delete('/:id', { schema: deleteBlogValidation }, deleteBlog);

  // Create a new blog
  fastify.post('/', { schema: addBlogValidation }, addBlog);

  // Update an existing Category
  fastify.put('/:id', { schema: updateBlogValidation }, updateBlog);
}

export default routes;
