

try {
    console.log(a)
    let a = 10
} catch(error) {
    console.log(`Error is ${error}`)
}

// console.log(a)
// let a = 10


console.log('Hello World!!')


try {
    let sum = 10 / 0;
    if(sum === Infinity) {
        // throw new Error(`you can't divide by 0`)
        throw 'you use zero as divider'
    }
} catch(err) {
    console.error(err)
} finally {
    console.warn('I am always here')
}

console.log('Continue')