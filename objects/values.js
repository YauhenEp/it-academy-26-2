import { obj, obj1, obj2 } from "./reference.js"

const person = {
    name: "Egor",
    lastName: "Pavlov",
    age: 30,
    isMaried: false,
    phone: 73249234,
    'payment history': [],
    car: {
        brand: "Toyota",
        year: 2022,
        model: "Camry"
    }
}


Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

// person.name = 'Ivan'

console.log(person.name)


for(let key in person) {
    console.log(person[key])
}

// delete person.name

console.log(person.name)

const person1 = {}
Object.defineProperties(person1, {
    name: {
        value: "Sasha",
        writable: false,
        enumerable: false,
        configurable: false
    }
})

console.log('obj2 is - ', obj2)