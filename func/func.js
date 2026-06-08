console.log(add(50, 40))

function add(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(add(10, 30))
console.log(add(13, 36))

// console.log(minus(50, 40))
const minus = function (numOne, numTwo) {
    return numOne - numTwo
}

console.log(minus(13, 36))

console.log(add)


const obj = {
    numOne: 24,
    numTwo: 37,
    add: function() {
        return this.numOne + this.numTwo
    },
    addWithParam: function(key1, key2) {
        return this[key1] + this[key2]
    },
}

console.log(add.call(obj, obj.numOne, obj.numTwo))
console.log(add.apply(this, [34, 67]))

console.log(obj.add.call(obj))

const obj1 = {
    numOne: 450,
    numTwo: 230,
}

console.log(obj.add.call(obj1))

const addWithContext = obj.add.bind(obj1)

console.log(addWithContext)
console.log(addWithContext())


console.log('number is ', obj.addWithParam.call(obj1, 'numOne', 'numTwo'))
