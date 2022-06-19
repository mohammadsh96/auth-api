'use strict';
const foodModel = (sequelize, DataTypes) => 
sequelize.define('food', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    calories: {
        type: DataTypes.STRING,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        required: true
    }
});

module.exports = foodModel;