/******************FIRST PATTERN TYPE FOR MODULES******************************/
var greet = require('./greet1');
greet();
/******************FIRST PATTERN TYPE FOR MODULES******************************/




/*****************SECOND PATTERN TYPE FOR MODULES******************************/
// Remember that the require('./greet2') function only returns the
// "modules.exports" from the greet2.js, so you need to be able to call the
// method that was attached to the end of exports "modules.exports.greet"

// one way to call it would be: "greet2.greet();" Or a more common way:
// You just say explicitly what you're looking for on the end of the
// modules.exports object.            EX:
//                                     |
// var greet2 = require('./greet2').greet;  | We can do this because .greet
// is a method on the .exports object [ modules.exports.greet ]

//      This is giving us back " modules.export "
//      from the require('./greet2') function. So
//      this function returns an object and we're
//      just sayind we want to add a property
//      to that object called "greet".
//                    |
//           _________|_________
//           |                 |
var greet2 = require('./greet2').greet;
//  |    |                       |____|
//  |    |                          |
//  |    |             We are just passing this as a property to the
//  |    |             "module.exports" object. Remember,that
//  |    |             ".greet" is a method on ".exports" object:
//  |    |                     |
//  |    |   "module.exports.greet = function () {
//  |    |        console.log('Hello World');
//  |    |    };"
//  |    |
//  |____|
//     |
//  So now "greet2" IS the function and I can call it the same way:
//     |
// ____|
// |
greet2();

// So when you see that ".greet" after "require('./greet2')" we're reaching down
// into that "module.exports" object and getting a particular property/method.
/*****************SECOND PATTERN TYPE FOR MODULES******************************/




/******************THIRD PATTERN TYPE FOR MODULES******************************/
var greet3 = require('./greet3');
greet3.greet();
/******************THIRD PATTERN TYPE FOR MODULES******************************/




/******************FOURTH PATTERN TYPE FOR MODULES*****************************/
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();
/******************FOURTH PATTERN TYPE FOR MODULES*****************************/


/***** YOU WERE BY 15:00 just starting the greet5.js part. ****/
