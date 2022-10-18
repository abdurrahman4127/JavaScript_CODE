/*
template literals:
    delimited with backtick ( ` ) instead of single/double qoutes
    allows embedded variables and expressions
*/

let name = "AR";
let currentlyReading = 1;
let totalBook = 2;

/*
console.log("my name is", name);
console.log("i have read total", totalBook, "books");
console.log("i'm currently reading", currentlyReading, "book");
*/


/* // template literals: backtick ( ` )
console.log(`my name is ${name}`);
console.log(`i have read total ${totalBook} books`);
console.log(`i'm currently reading ${currentlyReading} book`);
*/

// let text = `my name is ${name}. i have read total ${totalBook} books. i'm currently reading ${currentlyReading} book`;
// console.log(text); 


// onto html page
let text = `my name is ${name} <br> i have read total ${totalBook} books <br> i'm currently reading ${currentlyReading} book`;
document.getElementById("myLabel").innerHTML = text;
