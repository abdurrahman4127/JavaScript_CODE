/*
toLocalestring() returns a string with a language sensitive 
representation of the number.

.toLocaleString(locale, {options});
    locale: specifies that language (undefined = default set in browser)
    options: objects with formatting options
*/

let num = 123456.789;

console.log(num.toLocaleString("en-US")); // USA
console.log(num.toLocaleString("hi-IN")); // hindi
console.log(num.toLocaleString("de-DE")); // standered german 

// currency style
console.log(num.toLocaleString("en-US", {style: "currency", currency: "USD"})); // USA
console.log(num.toLocaleString("hi-IN", {style: "currency", currency: "INR"})); // india
console.log(num.toLocaleString("de-DE", {style: "currency", currency: "EUR"})); // euro


// units
let val = 100;
console.log(val.toLocaleString(undefined, {style: "units", unit: "celsius"}));  //not yet working 