

let str = "12345"
let str2 = "12321"

let splittedStr = str2.split("")
console.log(splittedStr)
let reversedArray = splittedStr.reverse()
console.log(reversedArray)
let splittedReversedStr = reversedArray.join('')
console.log(splittedReversedStr)

// console.log(str2 === splittedReversedStr)

console.log(str === str.split('').reverse().join(''))
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
    email: "bb11@gmail.com"
  },
  {
    name: "Jan",
    email: "Jan@gmail.com"
  }
]

let namesWithA = []
for(let i = 0; i < users.length; i++) {
    if(users[i].name.includes('a') || users[i].name.includes('A')) {
        namesWithA.push(users[i])
    }
}

function findByText(text, key = 'name') {
  let names = []
  for(let i = 0; i < users.length; i++) {
    if(users[i][key].toLowerCase().includes(text)) {
        names.push(users[i])
    }
  }
  return names
}

console.log(findByLetter('a'))
console.log(findByLetter('j'))
console.log(findByLetter('b'))
console.log(findByLetter('8', 'email'))
// console.log(namesWithA)


let ssa = [{name: "a", width: "10", len:"12"},
{name: "b", width: "12", len:"14"},
{name: "c", width: "15", len:"11"}]


// [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}]
const newSsa = []
ssa.forEach(function (obj) {
  newSsa.push({
    name: obj.name,
    square: obj.width * obj.len
  })
})

// console.log(newSsa)

const newSsaLoop = []
for(let i = 0; i < ssa.length; i++) {
  newSsaLoop.push({
    name: ssa[i].name,
    square: ssa[i].width * ssa[i].len
  })
}

// console.log(newSsaLoop)


const newSsaMap = ssa.map(obj => {
  return {
    name: obj.name,
    square: obj.width * obj.len
  }
})

// console.log(newSsaMap)

const newSsaReduce = ssa.reduce((acc, cur) => {
  acc.push({
    name: cur.name,
    square: cur.width * cur.len
  })
  return acc
}, [])

// console.log(newSsaReduce)