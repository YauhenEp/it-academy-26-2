let strOne = 'Hello!'
let strTwo = "I am here!"
let strBack = `And By!`

console.log(strOne + ' ' + strTwo + ' ' + strBack)

console.log(`${strOne} ${strTwo} ${strBack}`)

console.log(strOne[0])
console.log(strOne.charAt(0))

console.log(strOne.length)

console.log(strOne.slice(0,3))

console.log(strOne.split(''))

let sent = `${strOne} ${strTwo} ${strBack} Hello! Hello! Hello!`;
console.log(sent.split(' '))
let arr = sent.split(' ')
console.log(arr.join(' - '))


console.log(sent.replace(`Hello`, `Hi`))
console.log(sent.replace(/Hello/g, `Hi`))


console.log(sent.indexOf('Anddsfd'))
console.log(sent.includes('And'))


console.log('   Hello!   '.trim())
console.log('   Hello!   '.trimStart())
console.log('   Hello!   '.trimEnd())
console.log('   Hello!   '.length)
console.log('   Hello!   '.trim().length)