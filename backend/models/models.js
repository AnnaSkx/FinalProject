const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const {INTEGER, STRING} = DataTypes;

const Book = sequelize.define('Book', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    cover: {type: STRING, allowNull: false},
    title: {type: STRING, allowNull: false},
    price: {type: STRING, allowNull: false},
    description: {type: STRING, allowNull: false},
    type: {type: STRING, allowNull: false}
})


module.exports = {Book}
