function getCounter() {
    let count = 0;
    return function addCount() {
        return count++;
    }
}

let c = getCounter();
console.log(c)
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())
console.log(c())

let c1 = getCounter();
console.log(c1())
console.log(c1())
console.log(c1())
console.log(c1())

console.log(c())

function getList() {
    let listOfItems = [];
    return function addItem(newItem) {
        listOfItems.push(newItem);
        return listOfItems;
    }
}

let list = getList()
console.log(list(123))
console.log(list(['fac', 'asd']))