//Creating new object

let myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

//now we using same like array objects

let myCar = new Object();
myCar.maxSpeed = 50;
myCar.drive = "masood";

console.log(myCar.drive);

myCar.drive = function() {
  console.log("now driving");
};

myCar.drive();

myCar.speed = function() {
  console.log("your to speed");
};
myCar.speed();

let myCar2 = {
  maxSpeed: 50,
  driver: "masood",
  drive: function(speed, time) {
    console.log(speed, time);
  }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.drive(50, 3));
