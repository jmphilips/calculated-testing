function add(x, y) {
	return x + y;
};

function subtract(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
};

function divide(x, y) {
	return x / y
};

function square(x) {
	return x * x
};

function sqRoot(x) {
	return Math.sqrt(x);
};

var buttons = document.getElementsByTagName("button");
var userInput = document.getElementById("userInput");
var equals = document.getElementById("equals")

console.log(buttons)

var currentButton = null;
var xNum = null;
var yNum = null;

window.addEventListener("click", function(){
	if (event.target.tagName == "BUTTON") {
	currentButton = event.target.value;
	xNum = userInput.value;
	console.log(xNum)
	userInput.value = "";
	};
});

equals.addEventListener("click", function(){
	yNum = userInput.value;

	return currentButton(xNum, yNum);
});






