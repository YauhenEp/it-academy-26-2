const arr = [10, 20, 30, 40, 50, 60, 70 , 80];

const newArr = []
arr.forEach((number) => newArr.push(number + 1))
console.log(newArr)

const newArrMap = arr.map(number => number + 2)
console.log(newArrMap)


const newArrMap1 = arr.map(function (number) {
    return number + 2
})

console.log(newArrMap1)


const newArrMap3 = arr.map((number) => {
    return number + 2
})
console.log(newArrMap3)
const person = {
    name: 'Name',
    getName: () => {
        console.log(`I am ${this.name}`)
    }
}

person.getName()