// age is now entered as string
// let age = window.prompt("enter your age");
// console.log("age is of type: " + typeof age);
// console.log("entered age: " + age);

/*
age = age + 7;
console.log("age after 7 years: " + age); // didnt add, rather concatenated
*/


// to convert string into number
// age = Number(age);
// console.log("age is of type: " + typeof age);

// age = age + 7;
// console.log("age after 7 years: " + age);



// number to string 
let x = 3.1416
console.log(x, typeof x);

x = String(x);
console.log(x, typeof x);


// boolean - false
let name = "";
console.log(name, typeof name);

name = Boolean(name);
console.log(name, typeof name); // converting empty string results in false


// boolean - false
let name2 = "Abdur Rahman";
console.log(name2, typeof name2); 

name2 = Boolean(name2);
console.log(name2, typeof name2); // converting non-empty string results in true
