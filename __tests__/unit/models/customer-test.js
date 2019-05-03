const {expect} = require('chai');
const Customer = require('./../../../models/Customer');

describe('birthdate', () => {
    //birthdate check, not correct
    it('birthdate should be a value in the form of yyyy-mm-dd', async () => {
        try {
            let customer = new Customer({
                firstname: "Laurence",
                lastname: "Fong",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "10-14-1998"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('Please submit a birthdate in the format yyyy-mm-dd');
        }
    });
    //birthdate check, correct. If correct won't throw any errors and complete execution
    it('should be fine if birthdate is in right format ', async () => {
        try {
            let customer = new Customer({
                firstname: "Laurence",
                lastname: "Fong",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "1998-10-14"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('Please submit a birthdate in the format yyyy-mm-dd');
        }
    });

});

describe('firstname', () => {
    //firstname should be defined
    it('firstname should not be null', async () => {
        try {
            let customer = new Customer({
                lastname: "Fong",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "10-14-1998"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('First name cannot be empty');
        }
    });
    //firstname not blank
    it('firstname should not be blank', async () => {
        try {
            let customer = new Customer({
                firstname: "",
                lastname: "Fong",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "10-14-1998"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('First name cannot be blank');
        }
    });
});

describe('lastname', () => {
    //lastname should be defined
    it('lastname should not be null', async () => {
        try {
            let customer = new Customer({
                firstname: "Laurence",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "10-14-1998"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('Last name cannot be empty');
        }
    });
    //lastname not blank
    it('lastname should not be blank', async () => {
        try {
            let customer = new Customer({
                firstname: "Laurence",
                lastname: "",
                title: "Dark Knight",
                city: "San Francisco",
                birthdate: "10-14-1998"
            });
            await customer.validate();
        } catch(error) {
            expect(error.errors[0].message).to.equal('Last name cannot be blank');
        }
    });
});