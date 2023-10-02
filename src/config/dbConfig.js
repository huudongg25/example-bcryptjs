const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize('learnBcryptjs', 'root', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize