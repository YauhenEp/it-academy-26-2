const str = "hello world"

for(let i = 0; i < str.length; i++) {
    console.log(str[i])
}

// console.log(str.slice(4,))
// console.log(str.slice(4,-1))


const arr = [10, 20, 30, 40, 50, 60, 70 , 80];

const a = arr.push(90)
console.log(arr)

const b = arr.pop()
console.log(arr)
console.log(b)

arr.unshift(0)
console.log(arr)

arr.shift()
console.log(arr)

const newArr = []
arr.forEach((number) => newArr.push(number + 1))
console.log(newArr)

const newArrMap = arr.map(number => number + 2)
console.log(newArrMap)

const newArrFiltered = arr.filter(number => number > 50)
console.log(newArrFiltered)

const sum = arr.reduce((prev, cur) => prev + cur, 1000)
console.log(sum)

const newArrR = arr.reduce(function (prev, cur) {
    const a = prev.unshift(cur)
    console.log(a)
    return prev;
}, [])
console.log(newArrR);