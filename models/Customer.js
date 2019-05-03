const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define('customer', {
    id:{
      field: 'CustomerID',
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      field: 'FirstName',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'First name cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'First name cannot be blank'
        },
        isAlpha: {
          args: true,
          msg: 'First name must only contain letters'
        }
      }
    },
    lastname: {
      field: 'LastName',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Last name cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'Last name cannot be blank'
        },
        isAlpha: {
          args: true,
          msg: 'Last name must only contain letters'
        }
      }
    },
    title: {
      field: 'Title',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'A title for the individual cannot be blank'
        }
      }
    },
    city: {
      field: 'City',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'The city field cannot be empty'
        },
        notEmpty: {
          args: true,
          msg: 'The city the individual hails from cannot be blank'
        },
        is: {
          args: /^[a-zA-Z0-9\s]+$/,
          msg: "Please use only letters and spaces for city name"
        }
      }
    },
    birthdate: {
      field: 'Birthday',
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Birthdate cannot be left empty'
        },
        notEmpty: {
          args: true,
          msg: 'A birthdate cannot be blank'
        },
        is: {
          args: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/,
          msg: "Please submit a birthdate in the format yyyy-mm-dd"
        }
      }
    }
  },
    {
      timestamps: false
    }
);