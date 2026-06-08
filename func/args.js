function add(num1, num2) {
    console.log(arguments)
    let sum = 0
    for(let i = 0; i < arguments.length; i++ ) {
        sum += arguments[i]
    }
    return sum
}

console.log(add(1, 24, 54, 43, 342, 65, 345, 943, 23))

function addRest(num1, num2, ...rest) {
    console.log(rest)
    return rest.reduce((acc, cur) => acc + cur, num1 + num2)
}

console.log(addRest(1, 24, 54, 43, 342, 65, 345, 943, 23))


console.log(add('sfs', {}, [], true))