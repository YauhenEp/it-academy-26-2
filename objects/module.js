const Person = require('./class')

const person = new Person('asd', 'dfaf', 20, 423542)
console.log('person is', person)

class Director extends Person {
    constructor(name, lastName, age, phoneNumber) {
        super(name, lastName, age, phoneNumber);
    }
}

module.exports = new Director('Mihail', 'Mihalych', 56, 23087549032)