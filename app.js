// because there is no "./greet.js" file for require to find, it looks inside the "greet" folder and looks for an "index.js" file.
var greet = require('./greet');

greet.english();
greet.spanish();
