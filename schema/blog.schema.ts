// GET '/:id'
export const getSchema = {
  params: { $ref: 'paramIdSchema#' },
  tags: ['blog'],
  description: 'This is a description.',
  response: {
    200: { $ref: 'blogSchema#' },
    404: { $ref: 'messageSchema#' },
  },
};
