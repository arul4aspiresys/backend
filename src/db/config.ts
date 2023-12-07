import { Sequelize } from 'sequelize';
require('dotenv').config();

const dbName = process.env.MYSQL_DBNAME as string;
const dbUserName = process.env.MYSQL_USERNAME as string;
const dbPassword = process.env.MYSQL_PASSWORD as string;
const dbHost = process.env.MSQL_HOST as string;
// const dbDriver = process.env.MYSQL_DRIVER as Dialect;

const dbConnection = new Sequelize(dbName, dbUserName, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
    logging: false,
});

export default dbConnection;