const { name } = require("./module")

let str = "12345"
let str2 = "12321"

// let splittedStr = str2.split("")
// console.log(splittedStr)
// let reversedArray = splittedStr.reverse()
// console.log(reversedArray)
// let splittedReversedStr = reversedArray.join('')
// console.log(splittedReversedStr)

// console.log(str2 === splittedReversedStr)

// console.log(str === str.split('').reverse().join(''))
// console.log(str2 === str2.split('').reverse().join(''))

const users = [
  {
    name: "John",
    email: "Jogn@mail.com"
  },
  {
    name: "Nick",
    email: "Nick84@gmail.com"
  },
  {
    name: "Alex",
    email: "Alex123@gmail.com"
  },
  {
    name: "Bob",
    emal: "bb11@gmail.com"
  },
  {
    name: "Jan",
    emal: "Jan@gmail.com"
  }
]

let namesWithA = []
for(let i = 0; i < users.length; i++) {
    if(users[i].name.includes('a') || users[i].name.includes('A')) {
        namesWithA.push(users[i])
    }
}

console.log(namesWithA)