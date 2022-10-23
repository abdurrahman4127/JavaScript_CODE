/*
function expression >
    function without a name i.e. anonymous function 
    avoids polluting the global score with names
    write it, then forgrt about it
*/

// traditional function 
function sayHello() {
    console.log("Hello");
}

// function expression 
const greeting = function() {
    console.log("Hello");
}

sayHello();   // func call
greeting();   // just call the variable 