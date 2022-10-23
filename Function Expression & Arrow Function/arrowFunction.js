/*
arrow function >
    compact alternatie to a traditional function
*/

// traditional function
const greeting = function(name) {
    console.log(`hello, ${name}`);
}

greeting("spike speigel");


// arrow function; parenthesis isn't needed if have one argument. e.g. const func = argument => {}
const greeting2 = (name2) => {
    console.log(`hello, ${name2}`);
}

greeting2("l lawliet");


// if have no argument, empty parenthesis  
const greeting3 = () => {
    console.log("hello, everyone!");
}

greeting3();


// another example traditional
const percent = function(x, y) {
    return (x/y) * 100;
}

console.log(`${percent(75, 199)}%`);


// arrow func
const percent2 = (x, y) => {
    return (x/y) * 100;
}

console.log(`${percent2(75, 199)}%`);
