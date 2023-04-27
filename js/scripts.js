// business logic
function add(number1, number2) {
	return number1 + number2;
}

// user interface logic
let number1 = parseInt(prompt("Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));
// const sum = add(number1, number2);

window.alert("The addition of your numbers equals: " + add(number1, number2));

function subtract(number3, number4) {
	return number3 - number4;
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));
// const sum = subtract(number3, number4);

window.alert("The subtraction of your numbers equals: " + subtract(number3, number4));

function multiply(number5, number6) {
	return number5 * number6;
}

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));
// const sum = multiply(number1, number2);

window.alert("The multiplication of your numbers equals: " + multiply(number5, number6));

function divide(number7, number8) {
	return number7 / number8;
}

const number7 = parseInt(prompt("Enter a number:"));
const number8 = parseInt(prompt("Enter another number:"));
// const sum = divide(number1, number2);

window.alert("The division of your numbers equals: " + divide(number7, number8));