function Car(){}

Car.prototype = {
    constructor: Car,
    speed: 0,
    printSpeed: function(){
        console.log(`${this.speed} km/h`);
    }
};

var car = new Car();
car.instanceMethod = function(){
    console.log(`An instance method`);
};

car.speed = 50;
car.printSpeed();
car.instanceMethod();

function Cabriolet(){}

Cabriolet.prototype = new Car();
Cabriolet.prototype.stopState = `closed`;
Cabriolet.prototype.openTop = function(){
    this.topState = `opened`;
    console.log(`Top: ${this.topState}`);
}
Cabriolet.prototype.closeTop = function(){
    this.stopState = `closed`;
    console.log(`Top: ${this.topState}`);
};

var cabriolet = new Cabriolet();;
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

function TeslaCabriolet(){}

TeslaCabriolet.prototype = new Cabriolet();
TeslaCabriolet.prototype.name = `Tesla http://www.teslamotors.com/roadster`;
TeslaCabriolet.prototype.sayName = function(){
    console.log(`${this.name}`);
};

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
//---------------------------------------------------------------------------------------------------
class Car{
    constructor(speed){
        this.speed = speed;
    }
    printSpeed(){
        console.log(`Speed: ${this.speed}`);
    }

    instanceMethod(){
        console.log("An instance method");
    };
}

var car = new Car(50);
car.printSpeed();
car.instanceMethod();

class Cabriolet extends Car{
    constructor(speed){
        super(speed);
    }

    printSpeedOf(){
        this.printSpeed();
    }

    stopState = `closed`;
    openTop(){
        this.topState = `opened`;
        console.log(`Top: ${this.topState}`);
    }
    closeTop(){
        this.stopState = `closed`;
        console.log(`Top: ${this.topState}`);
    }
};

var cabriolet = new Cabriolet(120);
cabriolet.printSpeedOf();
cabriolet.openTop();
cabriolet.closeTop();

class TeslaCabriolet extends Cabriolet{
    constructor(){
        super();
        this.name = `Tesla http://www.teslamotors.com/roadster`;
    }

    sayName(){
        console.log(`${this.name}`);
    }
}

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();

