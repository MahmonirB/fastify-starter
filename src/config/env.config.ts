const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
  },
};

const envOptions = {
  confKey: "config", // optional, default: 'config'
  schema: schema,
  dotenv: {
    path: `.env.${process.env.NODE_ENV}`,
    debug: true,
  },
};

module.exports = envOptions;
