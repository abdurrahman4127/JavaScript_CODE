// array of number data type
let array = [30, 20, 10, 15, 25];

// another way of initializing
let A = [];
A = [10, 30, 20, 25, 35];
console.log("normal: " + A);
console.log("sorted: " + A.sort()); // variable.sort()

// push into the array
A.push(15);
console.log("15 inserted: " + A);
console.log("sort after insertion: " + A.sort());

// pops the last element
console.log("pop: " + A.pop()); 


// array of string data type
let str = ["A", "C", "D", "B", "E"];
console.log(str);
console.log("string sort: " + str.sort());


// aray of mixed data type
let mixed = [];
mixed = ["a", 1, "b", 2, "c", 3];
console.log("mixed array: " + mixed);
console.log("mixed array sort: " + mixed.sort());
console.log(typeof mixed);