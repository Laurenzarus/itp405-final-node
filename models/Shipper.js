const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('shipper', {
    id:{
      field: 'ShipperID',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      field: 'CompanyName',
      type: Sequelize.STRING
    },
    phone: {
      field: 'Phone',
      type: Sequelize.STRING
    }
  },
    {
      timestamps: false
    }
);