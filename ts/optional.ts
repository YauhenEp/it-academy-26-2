function getFullName(name: string, lastName: string, secondName?: string): string {
    console.log(`${name} ${lastName}${secondName ? ' ' + secondName : ''}`)
    return `${name} ${lastName}${secondName ? ' ' + secondName : ''}`
}

getFullName('Jan', 'Maz')

getFullName('Jan', 'Maz', 'David')

getFullName('Jan', 'Maz', 'David')


function getFullName2(name: string, lastName: string, secondName: string = 'Kilian'): string {
    console.log(`${name} ${lastName}${secondName ? ' ' + secondName : ''}`)
    return `${name} ${lastName}${secondName ? ' ' + secondName : ''}`
}

getFullName2('Jan', 'Maz')

getFullName2('Jan', 'Maz', 'Henry')

interface IPerson {
    name: string,
    lastName: string,
}


interface IPerson1 {
    name: string,
    lastName: string,
    age: number
}

const person: IPerson = {
    name: 'Dasha',
    lastName: 'Ivanova',
}

const person1: IPerson1 = {
    name: 'yegor',
    lastName: 'petrov',
    age: 32
}

function decorator(greet: string, person: IPerson, callback: (name: string, lastName: string, secondName?: string) => string): string {
    console.log(`${greet}! ${callback(person.name, person.lastName)}`)
    return `${greet}! ${callback(person.name, person.lastName)}`
}

decorator('Hello', person, getFullName)
decorator('Hello', person1, getFullName)