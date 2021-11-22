//Pizza Place Functions Homework

// Create pizzaToppings Array
const pizzaToppings = ["pepperoni", "mushrooms", "onions", "black olives", "banana pepper"];

// Create pizzaToppings String
let pizzaToppingsString = "";
for (let element of pizzaToppings){
pizzaToppingsString += element + ", ";
}

// Create greetCustomer Function
function greetCustomer() {
console.log (`Welcome to Busuyi's Palace Pizza, our toppings today are ${pizzaToppingsString}. When you are ready, kindly place your order, THANK YOU!`);
}

// Create getPizzaOrder Function
function getPizzaOrder(size, crust, ...toppings) {
console.log (`One ${size} ${crust} pizza with toppings: ${toppings} coming up!`);
return [size, crust, toppings];
}

// Create preparePizza Function
function preparePizza([size, crust, toppings]) {
console.log (`... your pizza is cooking!`);
return {size:size, crust:crust, toppings:toppings};
}

// Create servePizza Function
function servePizza({size, crust, toppings}) {
console.log (`Order up! Here's your ${size} ${crust} pizza with toppings: ${toppings}. Enjoy!`);
return {size:size, crust:crust, toppings:toppings};
}

// Function Calling
greetCustomer();
const returnvalueofgetPizzaOrder = getPizzaOrder("large", "thick", ["pepperoni", " mushrooms", " onions"]);
const returnvalueofpreparePizza = preparePizza(returnvalueofgetPizzaOrder);
servePizza(returnvalueofpreparePizza);