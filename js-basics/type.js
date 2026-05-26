const num = 10;
const str = 'str';
let und;
let nil = null;
const bi = 1000000n;
const symb = Symbol('12')
const bool = true
const obj = {
    name: "yauhen",
}

console.log(typeof num)
console.log(typeof str)
console.log(typeof und)
console.log(typeof nil)
console.log(typeof bi)
console.log(typeof symb)
console.log(typeof bool)
console.log(typeof obj)
console.log(typeof function() {})

console.log(obj.name)
console.log(obj.age)


if(obj.name) {
    console.log("Name is - ", obj.name)
} else {
    console.log("Name is not defined")
}

if(obj.age) {
    console.log("Age is - ", obj.age)
} else {
    console.log("Age is not defined")
}

console.log(10 && 'str' && 0 && true && {} && function() {} && [] && -0)

console.log(false || 0 || -0 || '' || 'hello' || NaN || null)

console.log(0 == '')
console.log(1 == true)

console.log(0 === '')
console.log(1 === true)