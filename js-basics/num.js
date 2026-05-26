console.log(10/0)
console.log(-10/0)

console.log([] * 'dsfd')

const PI = Number(3.14)
console.log(PI)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)

console.log(Math.max(1, 10, 24, 94))
console.log(Math.min(1, 10, 24, 94))

console.log(Math.floor(Math.random() * (100 - 1) + 1))


console.log(typeof +'1000')
console.log(typeof Number('1000'))
console.log(typeof parseInt('1000'))


console.log(typeof parseInt('sdfd 1000 sfsd'))
console.log(parseInt('1000 sfsd', 10))


console.log(Number('1000 sfsd'))

console.log(parseInt('1000 sfsd', 8))
console.log(parseInt('1000 sfsd', 16))

console.log(+(1000).toString(2))


console.log(+(0.1 + 0.2).toFixed(2) === 0.3)
console.log((0.1 + 0.2).toFixed(2))