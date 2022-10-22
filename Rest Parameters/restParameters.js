/*
rest parameters >
    represents an indefinite number of parameters
    packs agruments into an array
*/

// for 2 variables
function sum(x, y) {
    return x + y;
}

// for 3 variables
function sum2(x, y, z) {
    return x + y + z;
}

// for multiple variables
function sumX(...parameters) {
    let sum = 0;

    for(let number of parameters) {
        sum += number;
    }

    return sum;
}


let a = 32;
let b = 21;
let c = 23;
let d = 20;
let e = 30;

console.log(sum(a, b));
console.log(sum2(a, b, c));
console.log(sumX(a, b, c, d, e));  