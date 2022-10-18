/*
assignment operator: =
comparison operator: ==
strick equality operator: ===
*/

// assignment
let x = 3.14;

// comparison: compares values
if (x == 3.14)
    console.log("true");
else
    console.log("false");


// strick equality: compares values along with data type 
let y = 3.14;
if (x === y)
    console.log("true");
else
    console.log("false");


// x = number; y = string
y = "3.14";
if (x === y)
    console.log("true");
else
    console.log("false");


let z = "3.14";
if (y === z)
    console.log("true");
else
    console.log("false");