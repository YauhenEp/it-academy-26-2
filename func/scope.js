let a = 10;

function counter() {
    let c = 0
    console.log(c)
    console.log('func scope - ', a)
    function count() {
        let b = 20;
        console.log('second function ', b)
    }
    // console.log('first function ', b)
    return count()
}

counter()
console.log(a)

console.log(global)
// console.log(window)