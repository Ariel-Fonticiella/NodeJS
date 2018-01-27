// REVEALING MODULE PATTERN:

// Exposing only the properties and methods you want from a module via a
// returned object. A very common and clean way to structure and protect code
// within modules.

// This pattern is very popular in JavaScript.

var greeting = 'Hello World!!!!';

function greet() {
      console.log(greeting);
}

module.exports = {
    greet: greet
};
