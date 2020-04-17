const path = require('path');
const Sequelize = require('sequelize');

const bdd = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../', 'sqlite', 'bdd.sqlite')
});

module.exports = bdd;
