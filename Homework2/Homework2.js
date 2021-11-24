// For the Pizza Place Homework

// var pizzaPlace, numberOfToppings
let pizzaPlace, numberOfToppings
pizzaPlace = "Best Palace Pizza Place"
numberOfToppings = 10
console.log(pizzaPlace);
console.log(numberOfToppings);
typeof(pizzaPlace);
typeof(numberOfToppings);

//console.log("The " + pizzaPlace + " Serves " + numberOfToppings + " Toppings.");
console.log(`The ${pizzaPlace} Serves ${numberOfToppings} Toppings!`);
if (numberOfToppings < 10) {
console.log("Quality, not quantity");
}
else{
console.log("A whole lot of pizza");
}

// For the Bonus Challenge
// var loopVariable
let loopVariable
loopVariable = 2
// while loopVariable is less than or equal to numberOfToppings,
while (loopVariable <= numberOfToppings) {
  // print loopVariable
  console.log(loopVariable);
  // increment by one and re-assign loopVariable
  loopVariable += 2;
}