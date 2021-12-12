//Pizza Place Functions Homework

// Create pizzaToppings Array
const pizzaToppings = ["pepperoni", "mushrooms", "onions", "black olives", "banana pepper"];

// Create pizzaToppings String
let pizzaToppingsString = "";
/*for (let element of pizzaToppings) {
pizzaToppingsString += element + ", ";
}*/
for (let i = 0; i < pizzaToppings.length; i++) {
  if (i < pizzaToppings.length-1) {
    pizzaToppingsString += pizzaToppings[i] + ", ";
  }
  else {
    pizzaToppingsString += pizzaToppings[i];
  }
}

// Create greetCustomer Function
function greetCustomer() {
console.log (`Welcome to Busuyi's Pizza Palace, our toppings today are ${pizzaToppingsString}. When you are ready, kindly place your order, THANK YOU!`);
}

// Create getPizzaOrder Function
function getPizzaOrder(size, crust, toppings) {
  if (toppings == []) {
    console.log(`One ${size} ${crust} pizza coming up!`);
  }
  else {
    console.log (`One ${size} ${crust} pizza with toppings: ${toppings} coming up!`);
  }
return [size, crust, toppings];
}

// Create preparePizza Function
function preparePizza([size, crust, toppings]) {
console.log (`... your pizza is cooking!`);
return {size:size, crust:crust, toppings:toppings};
}

// Create servePizza Function
function servePizza({size, crust, toppings}) {
  if (toppings == []) {
    console.log (`Order up! Here's your ${size} ${crust} pizza. Enjoy!`);
  }
  else {
    console.log (`Order up! Here's your ${size} ${crust} pizza with toppings: ${toppings}. Enjoy!`);
  }
return {size:size, crust:crust, toppings:toppings};
}

// Function Calling
greetCustomer();
// toppings = "";
toppings = ["pepperoni", " mushrooms", " onions"];
let returnvalueofgetPizzaOrder = getPizzaOrder("large", "thick", toppings);
let returnvalueofpreparePizza = preparePizza(returnvalueofgetPizzaOrder);
servePizza(returnvalueofpreparePizza);

// Console.log the Final Pizza Object
console.log(returnvalueofpreparePizza);
