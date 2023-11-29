const schema = {
  type: 'object',
  required: ['PORT', 'DATABASE_URL'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    DATABASE_URL: {
      type: 'string',
      default: 'Salam azizam',
    },
  },
};

const envOptions = {
  confKey: 'config', // optional, default: 'config'
  schema: schema,
  dotenv: {
    path: `./.env.${process.env.NODE_ENV}`,
    debug: true,
  },
};

export default envOptions;
