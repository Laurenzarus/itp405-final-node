const frisby = require('frisby');

const {Joi} = frisby;


//get collection status code check
it('should return a json object for customer when provided correct id', () => {
    return frisby
        .get('https://itp405-final-nodejs.herokuapp.com/api/customers')
        .expect('status', 200);
})
//get by id when it does work
it('should return a json object for customer when provided correct id', () => {
    return frisby
        .get('https://itp405-final-nodejs.herokuapp.com/api/customers/8')
        .expect('json', 'firstname', 'Walter')
        .expect('json', 'lastname', 'White');
})
//get by id when it doesn't work
it('should return a status code of 200 because customer was not found', () => {
    return frisby
        .get('https://itp405-final-nodejs.herokuapp.com/api/customers/0')
        .expect('status', 404);
})
//patch when can't find
it('should return status code of 404 when the customer is not found', () => {
    return frisby
        .patch('https://itp405-final-nodejs.herokuapp.com/api/customers/0', {
            firstname: "Laurence",
            lastname: "Fong",
            title: "Dark Knight",
            city: "San Francisco",
            birthdate: "1998-10-14"
        })
        .expect('status', 404);
});

//check success patch
it('should successfully patch a track and return status code and updates', () => {

    return frisby.patch('https://itp405-final-nodejs.herokuapp.com/api/customers/1', {
        firstname: "Laurence",
        lastname: "Fong",
        title: "Dark Knight",
        city: "San Francisco",
        birthdate: "1998-10-14"
    })
    .expect('status', 200)
    .expect('json', 'firstname', 'Laurence')
    .expect('json', 'lastname', 'Fong')
    .expect('json', 'title', 'Dark Knight')
    .expect('json', 'city', 'San Francisco')
    .expect('json', 'birthdate', '1998-10-14');

});

//Post fail
it('should throw status code 422 since firstname is missing', () => {
    return frisby.post('https://itp405-final-nodejs.herokuapp.com/api/customers', {
        lastname : "Fong",
        title : "Dark Knight",
        city : "San Francisco",
        birthdate : "1998-10-14"
    })
    .expect('status', 422);
});

//Post working
it('should return a customer object after successful insertion', () => {
    return frisby.post('https://itp405-final-nodejs.herokuapp.com/api/customers', {
        firstname: "Laurence",
        lastname : "Fong",
        title : "Dark Knight",
        city : "San Francisco",
        birthdate : "1998-10-14"
    })
    .expect('json', 'firstname', 'Laurence')
    .expect('json', 'lastname', 'Fong')
    .expect('json', 'title', 'Dark Knight')
    .expect('json', 'city', 'San Francisco')
    .expect('json', 'birthdate', '1998-10-14');
});

//Delete nonexisting record
it('should return a 404 trying to delete nonexistent customer', () => {
    return frisby.delete('https://itp405-final-nodejs.herokuapp.com/api/customers/0')
        .expect('status', 404);
})

//Delete existing record
it('should return a 404 after deleting nonexistent customer', () => {
    return frisby.delete('https://itp405-final-nodejs.herokuapp.com/api/customers/1')
        .expect('status', 404);
})


