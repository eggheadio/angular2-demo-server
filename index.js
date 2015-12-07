module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        people: _.times(1000, function (n) {
            return {
                id: n,
                name: {
                  first: faker.name.firstName(),  
                  last: faker.name.lastName()  
                },
                email: faker.internet.email(),
                username: faker.internet.userName(),
                avatar: faker.internet.avatar(),
                company: faker.company.companyName(),
                address: {
                    streetAddress: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCode(),
                },
                phone: faker.phone.phoneNumber()
            }
        })
    }
}