const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('order', {
    id:{
      field: 'OrderID',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      field: 'firstName',
      type: Sequelize.STRING
    },
    lastName: {
      field: 'lastName',
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false
    }
);