export const blogSchema = {
  $id: 'blogSchema',
  type: 'object',
  // required: ['title'],
  nullable: true,
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    //   createdAt: { type: 'string', format: 'date-time' },
    //   updatedAt: { type: ['string', 'null'], format: 'date-time' },
  },
};
