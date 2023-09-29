const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('learnBcryptjs', 'root', 'Liverpool98', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize