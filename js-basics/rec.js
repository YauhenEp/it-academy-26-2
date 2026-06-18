function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2) 
}

console.log(fib(10))

let Y = {
    name: 'Y',
    age: 32,
    manager: "VB",
    employees: ["cv", 'sd']
}

function findBosses(obj) {
    let result = []
    if(obj.manager) {
        result.push(obj.manager)
        findBosses(obj)
    }    
    return result;
}



