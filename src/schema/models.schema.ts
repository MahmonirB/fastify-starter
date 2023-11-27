export const blogSchema = {
  $id: 'blogSchema',
  type: 'object',
  nullable: true,
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
  },
};
