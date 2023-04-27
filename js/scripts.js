// business logic
function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const a = add(number1, number2);
const b = subtract(number1, number2);
const c = multiply(number1, number2);
const d = divide(number1, number2);

window.alert("The addition of your numbers equals: " + a + "." + " The subtraction of your numbers equals: " + b + "." + " The multiplication of your numbers equals: " + c + "." + " The division of your numbers equals: " + d + ".");