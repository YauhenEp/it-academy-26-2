class Vehicle {
    protected maxSpeed: number;
    private passengerCapacity: number;
    public readonly brand: string;
    constructor(maxSpeed: number, passengerCapacity: number, brand: string) {
        this.maxSpeed = maxSpeed,
        this.passengerCapacity = passengerCapacity,
        this.brand = brand
    }

    public getPassCapacity() {
        console.log(this.passengerCapacity)
        return this.passengerCapacity;
    }

    protected getInformation() {
        return `${this.getPassCapacity()} and ${this.passengerCapacity}, ${this.maxSpeed}, ${this.brand}`
    }
}


class RoadTranscport extends Vehicle {
    constructor(maxSpeed: number, passengerCapacity: number, brand: string) {
        super(maxSpeed, passengerCapacity, brand)
    }

    getInf() {
        console.log(`${this.getInformation()}`)
        return this.getInformation()
    }
}


const vehicle = new Vehicle(120, 80, "Maz")
const roadTransport = new RoadTranscport(200, 4, "Toyota")

vehicle.getPassCapacity()
// vehicle.passengerCapacity

roadTransport.getPassCapacity()
// roadTransport.passengerCapacity

// vehicle.getInformation()
roadTransport.getInf()

// vehicle.brand = 'New Brand'