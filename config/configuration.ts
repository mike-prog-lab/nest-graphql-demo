import * as process from 'process';

export default () => {
  return {
    port: parseInt(process.env.PORT),
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      ssl: process.env.DB_SSL === 'true',
    },
  };
};
