const { Model, DataTypes } = require('sequelize');
const bdd = require('../config/db');

class Livre extends Model {}
Livre.init({
    titre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    resume: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    parution: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    sequelize: bdd,
    tableName: 'livre'
});

module.exports = Livre;
