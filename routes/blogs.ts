import { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '../controller/blogs';
import { getSchema } from '../schema/blog.schema';

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
const routes = [
  {
    method: 'GET',
    url: '/api/blogs',
    handler: getAllBlogs,
  },
  {
    method: 'GET',
    url: '/api/blogs/:id',
    schema: getSchema,
    handler: getBlog,
  },
  {
    method: 'POST',
    url: '/api/blogs',
    schema: addBlogValidation,
    handler: addBlog,
  },
  {
    method: 'PUT',
    url: '/api/blogs/:id',
    schema: updateBlogValidation,
    handler: updateBlog,
  },
  {
    method: 'DELETE',
    url: '/api/blogs/:id',
    schema: deleteBlogValidation,
    handler: deleteBlog,
  },
];

export default routes;
