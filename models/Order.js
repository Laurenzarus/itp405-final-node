const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('order', {
    id:{
      field: 'OrderID',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customerID: {
        field: 'CustomerID',
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'customerID cannot be empty'
            },
            notEmpty: {
            args: true,
            msg: 'customerID cannot be blank'
            }
        }
    },
    item: {
      field: 'Item',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
            notNull: {
            args: true,
            msg: 'Item description cannot be empty'
            },
            notEmpty: {
            args: true,
            msg: 'Item description cannot be blank'
            }
        }
    },
    ordered: {
      field: 'OrderDate',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
            notNull: {
            args: true,
            msg: 'Must have nonempty order date'
            },
            notEmpty: {
            args: true,
            msg: 'Order date cannot be blank'
            }
        }
    },
    shipped: {
        field: 'ShippedDate',
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'Shipment date cannot be empty'
            },
            notEmpty: {
            args: true,
            msg: 'Shipment date cannot be blank'
            }
        }
    },
    shipperID: {
        field: 'ShipperID',
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'shipperID  cannot be empty'
            },
            notEmpty: {
            args: true,
            msg: 'shipperID cannot be blank'
            }
        }
    },
    amountID: {
        field: 'AmountID',
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'amountID cannot be empty'
            },
            notEmpty: {
            args: true,
            msg: 'amountID cannot be blank'
            }
        }
    }
  },
    {
      timestamps: false
    }
);