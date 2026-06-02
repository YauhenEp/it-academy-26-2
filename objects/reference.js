const obj = {
    name: '1142341'
}

const obj1 = {
    name: '1',
    run: function() {
        return ' I can run'
    },
    getName: function() {
        return this.name
    },
    setName: function(name) {
        this.name = name
    }
}

console.log(obj === obj1)


const obj2 = obj

console.log(obj === obj2)

obj2.age = 23

console.log(obj)

console.log(obj1.run())


obj1.name = 'Filip'
console.log(obj1.getName())

obj1.setName('Marat')
console.log(obj1.getName())


console.log('Obj nam is - ', obj1.getName.call(obj))


export {obj, obj1, obj2};