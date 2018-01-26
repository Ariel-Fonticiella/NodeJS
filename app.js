// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Ariel');
};

greetMe();

// it's first-class
logGreeting(greetMe);
