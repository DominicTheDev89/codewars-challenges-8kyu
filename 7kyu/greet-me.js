// Write a method that takes one argument as name and then greets that name, 
// capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// My solution

var greet = function(name) {
    name = name.toLowerCase()
    let upper = name.charAt(0).toUpperCase()
    let end = name.substring(1);
    return `Hello ${upper}${end}!`
  };