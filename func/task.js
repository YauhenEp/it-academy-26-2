const prices = [7,1,5,3,6,4]
const prices1 = [7,6,4,3,1]

function getMaxProfit(array) {
    let maxProfit = 0;
    for(let i = 1; i < array.length; i++) {
        let profit = array[i - 1] - array[i];
        if(profit > maxProfit) {
            maxProfit = profit
        }
    }
    console.log(maxProfit)
    return maxProfit
}

getMaxProfit(prices)
getMaxProfit(prices1)


let ssa = [ {sideLength: 7 }, { sideLength: 13 }, { sideLength: 17 }, { sideLength: 17 }, { sideLength: 16 } ]

function getMaxSquare(arr) {
    const newArr = []
    ssa.forEach(obj => {
        newArr.push({
            square: obj.sideLength * obj.sideLength
        })
    })
    let maxSquare = 0
    for(let i = 0; i < newArr.length; i++ ) {
        if(newArr[i].square > maxSquare) {
            maxSquare = newArr[i].square
        }
    }
    console.log(maxSquare)
    return maxSquare
}
 
// getMaxSquare(ssa)


function getMaxSquare1(arr) {
    return arr.reduce((acc, cur) => {
        return Math.max(acc, cur.sideLength * cur.sideLength)
    }, 0)
}

console.log(getMaxSquare1(ssa))