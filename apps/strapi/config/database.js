module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    // default: {
    //   connector: 'bookshelf',
    //   settings: {
    //     client: 'sqlite',
    //     filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    //   },
    //   options: {
    //     useNullAsDefault: true,
    //   },
    // },
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'strapi'), // Not Required
        // ssl: {
        //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        // },
        ssl: false,
      },
      options: {
        // ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
})
