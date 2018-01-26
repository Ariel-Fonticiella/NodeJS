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

// use a function expression on the fly
logGreeting(function(){
    console.log('Hello Ariel!');
});

//========================================================================

// pass "by Value"
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);

//========================================================================

// Immediately Invoked Function Expression (IIFEE)

(function () {

    var firstname = 'John';
    console.log(firstname);

}());

var firstname = 'Jane';
console.log(firstname);
