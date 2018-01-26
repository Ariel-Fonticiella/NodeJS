// My first Module

var greet = function() {
    console.log('Hello!');
};
greet();

// MODULES are self-contained. So you can't try to invoke functions on the app.js file that are on the greet.js file. greet.js has to give it permission first.

// NODEjs lets us give access to other js files by using a special object "module.exports" to put things that i want to make available to anything else that uses this module, and only the things i attach to this will be made available.

// so I choose what becomes available outside of my module for ues. To be able to use it in the other file, you can set a variable equal to the results of the function [ ex: var greet = require('./greet.js') ] This will be done in the other other js file, here the app.js.

module.exports = greet;

// Now this MODULE is exposing the greet function, it's making it available for use outside the module. 
