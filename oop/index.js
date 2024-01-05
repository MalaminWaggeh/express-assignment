class Car {
    constructor(maker, year, model) {
        this.maker = maker;
        this.year = year;
        this.model = model;
        this.speed = 100;
    }


    increaseSpeed = function() {
        this.speed += 10;
    }

    decreaseSpeed = function () {
        this.speed -= 10;
    }
}

const honda = new Car('honda', 2007, 'civic');
honda.increaseSpeed();

console.log(honda);

const toyota = new Car('toyota', 2023, 'camry');
toyota.increaseSpeed();

console.log(toyota);

class Animal {
	constructor(eyes, legs, isAwake, isMoving, isMammal) {
		this.eyes = eyes,
    this.legs = legs,
    this.isAwake = isAwake,
    this.isMoving = isMoving,
    this.isMammal = isMammal,
}
}

const cat1 = new Animal(2, 4, true, false, true);