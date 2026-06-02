class Person {
    #region = 'Belarus'
    _state = 'Minskaya oblast'
    constructor(name, lastName, age, phoneNumber) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    getRegion() {
        return this.#region 
    }

    get state() {
        return this._state
    }
}

const client1 = new Person('Egor', 'Petrov', 30, 23095432)
const client2 = new Person('Ivan', 'Ivanov', 27, 52435245)

console.log(client1.state)
console.log(client2)

class Employee extends Person {
    constructor(name, lastName, age, phoneNumber) {
        super(name, lastName, age, phoneNumber);
        this.workHistory = []
    }
}



const employee = new Employee("Gleb", "Davydow", 23, 328590732)
console.log(employee)

console.log(client1._state)
console.log(client1.getRegion())


console.log(employee.toString())
employee.toString = function() {
    return 'I am string';
}
console.log(employee.toString())


module.exports = Person;