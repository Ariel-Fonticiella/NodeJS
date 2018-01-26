// Function that NODE makes available inside it's JS Core.

// You pass require('string') an argument of a string and the string contains the location or the name of the MODULE that you wish to import or that is used here in this app.js file.

  // I've invoked the require function (require('./greet.js')) and i've given it a string telling it the name of the file where my MODULE lives.

  // to use the greet() function from the greet.js file, you just set a variable equal to the results of the function.

  // So the require function will return, "module.exports". Now you can call greet() b/c you have your own var named greet that is = to the results of require('./greet.js') and require will give you back w/e you have attached at the end of module.exports = greet; So here, greet.
  var greet = require('./greet.js');
  greet();
