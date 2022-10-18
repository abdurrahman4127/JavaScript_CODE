let name = "Abdur Rahman";

/*
console.log(name.length);
console.log(name.charAt(0));
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("a"));
*/


// remove empty space
let name2 = " L Lawliet    ";
console.log(name2.trim());

// upper-lower case
let name3 = "Spike Speigel";
console.log(name3.toUpperCase());
console.log(name3.toLowerCase());

// replacement
// bDay = "01.07.2001".replaceAll(".", "/"); //replaceAll() has issue
let phone = "01637-197303";
console.log(phone.replace("-", ""));


// slicing stings
let fullName = "Abdur Rahman", firstName, lastName;

// using slice method - manually
firstName = fullName.slice(0, 5);
lastName = fullName.slice(6);

// another way - systematically
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1); // " " is at 5, but we needed 6


console.log("first name: " + firstName);
console.log("last name: " + lastName);