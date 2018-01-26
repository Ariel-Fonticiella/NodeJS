// What if you don't want the same object to come back from
// "require('./greet3')" all the time?

// You can change what we attach to module.exports or what you replace it with.

function Greetr() {
    this.greeting = 'Hello World!!!';
    this.greet = function() {
        console.log(this.greeting);
    };
}

module.exports = Greetr;
