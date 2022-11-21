import 'dotenv/config';
// NOTE: 환경변수에 따른 다른 설정은 논의
export default {
  development: {
    type: 'mysql',
    host: process.env.DEV_MYSQL_HOST,
    port: Number(process.env.DEV_MYSQL_PORT),
    username: process.env.DEV_MYSQL_USERNAME,
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_MYSQL_DATABASE,
    synchronize: true,
    logging: false,
  },
  test: {
    type: 'mysql',
    host: process.env.DEV_MYSQL_HOST,
    port: Number(process.env.DEV_MYSQL_PORT),
    username: process.env.DEV_MYSQL_USERNAME,
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_MYSQL_DATABASE,
    synchronize: true,
    logging: false,
  },
  production: {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    logging: false,
  },
};
