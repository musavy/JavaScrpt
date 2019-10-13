//constructor functions

let Car = function(maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function() {
    console.log("dirver name is " + this.driver);
  };
};

let myCar = new Car(70, "masood");
let myCar2 = new Car(100, "miran");
let myCar3 = new Car(80, "morsal");
let myCar4 = new Car(90, "sahel");
myCar.drive(30, 5);
myCar3.logDriver();
