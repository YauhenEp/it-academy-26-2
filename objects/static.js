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

    static setPhoneNumber(newNumber) {
        this.phoneNumber = newNumber
    }

    static getPhoneNumber() {
        return this.phoneNumber
    }
}

console.log(Person)

const p1 = new Person('saf', 'asfs', 45, 252323532)

console.log(p1.getRegion())
console.log(Person.setPhoneNumber(123))
console.log(Person.getPhoneNumber())

console.log(p1.phoneNumber)