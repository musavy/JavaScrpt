// variable , we have tow kind of variable 1= global variable is on the top function 2= local variable which define inside of function

function getAverage(a, b) {
  let average = (a, b) / 2; //local varibale
  return average;
}

let myResult = getAverage(7, 11); //global varibale

function logResult() {
  console.log("the average" + myResult + "inside the function");
}

logResult();
