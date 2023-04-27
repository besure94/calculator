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

let sumString = number1 + " + " + number2 + " = " + a;
let subString = number1 + " - " + number2 + " = " + b;
let multString = number1 + " * " + number2 + " = " + c;
let divString = number1 + " / " + number2 + " = " + d;

window.alert(sumString + ", " + subString + ", " + multString + ", " + divString);