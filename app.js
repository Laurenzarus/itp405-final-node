let express = require('express');
let knex = require('knex');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const Customer = require('./models/Customer');
const Shipper = require('./models/Shipper');
const Order = require('./models/Order');
const Amount = require('./models/Amount');

const {Op} = Sequelize;

const app = express();

app.use(bodyParser.json());

//CUSTOMERS
app.get('/api/customers', function(request, response) {

    Customer.findAll().then((customers) => {
      response.json(customers);
    });

});

app.get('/api/customers/:id', function(request, response) {
  
  let {id} = request.params;
  
  Customer.findByPk(id).then((customer) => {
    if (customer) {
      response.json(customer);
    }
    else {
      response.status(404).send();
    }
  });
});

app.post('/api/customers', function(request, response) {
    Customer.create({
      firstname: request.body.firstname,
      lastname : request.body.lastname,
      title : request.body.title,
      city : request.body.city,
      birthdate : request.body.birthdate
    }).then((customer) => {
      response.json(customer);
    }, (validation) => {
      response.status(422).json({
        errors: validation.errors.map((error) => {
          return {
            attribute: error.path,
            message: error.message
          }
        })
      });
    });
})

app.patch('/api/customers/:id', function(request, response) {

    let {id} = request.params;

    Customer.findByPk(id).then((customer) => {

        customer.firstname = request.body.firstname;
        customer.lastname = request.body.lastname;
        customer.title = request.body.title;
        customer.city = request.body.city;
        customer.birthdate = request.body.birthdate;
        //save
        customer.save().then(() => {
            response.json(customer);
        }, (validation) => {
            response.status(422).json({
            errors: validation.errors.map((error) => {
            return {
                attribute: error.path,
                message: error.message
            };
            })
        });
        });
    }).catch(() => {
        response.status(404).send();
    });
});

app.get('/api/shippers', function(request, response) {

    Shipper.findAll().then((shippers) => {
      response.json(shippers);
    });

});

app.get('/api/shippers/:id', function(request, response) {
  
  let {id} = request.params;
  
  Shipper.findByPk(id).then((shipper) => {
    if (shipper) {
      response.json(shipper);
    }
    else {
      response.status(404).send();
    }
  });
});

app.get('/api/amounts', function(request, response) {

    Amount.findAll().then((amounts) => {
      response.json(amounts);
    });

});

app.listen(process.env.PORT || 8000);