// GET '/:id'
export const getBlogSchema = {
  $id: 'getBlogSchema',
  params: { $ref: 'paramIdSchema#' },
  tags: ['blogs'],
  response: {
    200: { $ref: 'blogSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  },
};

// GET '/'
export const getAllBlogSchema = {
  $id: 'getAllBlogSchema',
  tags: ['blogs'],
  response: {
    200: { $ref: 'blogSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  },
};

// UPDATE '/:id'
export const updateBlogSchema = {
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

// POST '/'
export const postBlogSchema = {
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

// DELETE '/:id'
export const deleteBlogSchema = {
  $id: 'deleteBlogSchema',
  params: { $ref: 'paramIdSchema#' },
  tags: ['blogs'],
  response: {
    200: { $ref: 'blogSchema#' },
    404: { $ref: 'messageResponseSchema#' },
  },
};
