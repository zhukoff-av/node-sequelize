const Sequelize = require('sequelize')

module.exports = new Sequelize('postgres', 'classdb', '12345', {
    host: '****host****.rds.amazonaws.com',
    dialect: 'postgres'
});
