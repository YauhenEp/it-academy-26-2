interface IPerson {
    name: string,
    lastName: string,
    age: number,
    move: (typeOFMove: string) => void,
    eyesColor?: string
} 

interface IChild extends IPerson {
    numberOfToys: number
}

const person: IPerson = {
    name: "MAsha",
    lastName: "Ivanova",
    age: 18,
    move: function(typeOfMove: string): void {
        console.log(`I am ${typeOfMove}!`)
    },
    eyesColor: 'Blue'
}

const child: IChild = {
    name: "Ilya",
    lastName: "Petrov",
    age: 18,
    move: function(typeOfMove: string): void {
        console.log(`I am ${typeOfMove}!`)
    },
    eyesColor: 'Blue',
    numberOfToys: 10
}

type TPerson = {
    name: string,
    lastName: string,
    age: number,
    move: (typeOFMove: string) => void,
    eyesColor?: string
} 

const person1: TPerson = {
    name: "MAsha",
    lastName: "Ivanova",
    age: 18,
    move: function(typeOfMove: string): void {
        console.log(`I am ${typeOfMove}!`)
    },
    eyesColor: 'Blue'
}


type childORPerson = IChild | IPerson