// GET '/:id'
export const getBlogSchema = {
  $id: 'getBlogSchema',
  params: { $ref: 'paramIdSchema#' },
  tags: ['blogs'],
  response: {
    // 200: { $ref: 'blogSchema#' },
    // 404: { $ref: 'messageSchema#' },
  },
};
