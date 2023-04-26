// business logic
function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const sum = add(number1, number2);

window.alert("The addition of your numbers equals: " + sum);

// function subtract(number1, number2) {
// 	return number1 - number2;
// }

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const sum = subtract(number1, number2);

window.alert("The subtraction of your numbers equals: " + sum);

// function multiply(number1, number2) {
// 	return number1 * number2;
// }

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const sum = multiply(number1, number2);

// window.alert("The multiplication of your numbers equals: " + sum);

// function divide(number1, number2) {
// 	return number1 / number2;
// }

// const number1 = parseInt(prompt("Enter a number:"));
// const number2 = parseInt(prompt("Enter another number:"));
// const sum = divide(number1, number2);

// window.alert("The division of your numbers equals: " + sum);