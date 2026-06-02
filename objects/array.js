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

const array = [10, 20, 30, 40, 50]

console.log(array)

for(let i = 0; i < array.length; i++) {
    array[i] += 2
    console.log(array[i])
}
console.log(array)
console.log(array[0])
console.log(array.length)

const array1 = [10, false, {}, [], 'str', true]

for(let number of array) {
    console.log(++number)
}

