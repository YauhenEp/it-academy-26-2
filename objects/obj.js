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

console.log(person.age)
console.log(person.car.brand)
console.log(person['lastName'])
console.log(person['car']['model'])
console.log(person["payment history"])

for(let key in person) {
    console.log(`key is `, key)
    console.log(person[key])
}

const person1 = {
    name: "Sasha",
    lastName: "Ivanov",
    age: 27,
    isMaried: false,
    phone: 456546,
    car: {
        brand: "BMW",
        year: 2015,
        model: "X5"
    }
}


function Person(name, lastName, age, phoneNumber) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
}


const person3 = new Person('Pasha', 'Gm', 34, 2352435423)

// console.log(person3)


console.log(person3 instanceof Person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))