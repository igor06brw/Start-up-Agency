
import "./styles/main.scss"

class Car {
    manufacture: string;
    model: string;
    color: string;
    price: number;

    constructor(manufacture: string, model: string, color: string, price: number) {
        this.manufacture = manufacture;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    valuationOfCar() {
        return "This car cost: " + this.price + " PLN"
    }
}

let troc = new Car("Volkswagen", "T-Roc", "Pearl Grey", 75000);