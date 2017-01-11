//define and then invoke

//up till now, code has been written and then run... straight down the page.

var returnNothing = function() {
	console.log("I don't return anything");
};
returnNothing();

//two ways to define
var myFunction = function() { //function expression

    return blah;

};

function myFunction() { //function declaration

    return blah;

};




function addStuff() {
	var sum = 2+2;
	return sum; //return is the last thing that happens
}

var result = addStuff();
console.log("result", result);


// Pass data into the function by defining arguments
function add (one,two) {
	return one + two;
}

var addResult = add("hello", " brave new world");
console.log("Add with args", addResult );



function subtract (one, two) {
	return one - two;
}



// Look Out - functions can take other functions as an argument. Whaaaat?
// A function passed to another function is a lambda
function performAction (numberOne, numberTwo, action) {
  var meDone = action(numberOne, numberTwo);
  return meDone;
}
var addValues = performAction(1, 2, add);
var subtractValues = performAction(1, 2, subtract);

console.log("addValues", addValues);
console.log("subtractValues", subtractValues); 