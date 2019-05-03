const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('amount', {
    id:{
      field: 'AmountID',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bulkAmount: {
        field: 'Amount',
        type: Sequelize.INTEGER
    }
  },
    {
      timestamps: false
    }
);