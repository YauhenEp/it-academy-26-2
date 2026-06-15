enum Car {
    toyota =  "toyota",
    honda = "honda",
    bmw = "bmw",
    audi = "audi"
}

console.log(Car.bmw)
console.log(Car.toyota)

function getCar(carModel: Car): string {
    return Car[carModel]
}

getCar(Car.bmw)
getCar(Car.audi)