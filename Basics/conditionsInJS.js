function isGreater(a, b) {
    if(a > b)
        console.log(a + " is greater than " + b);
    else if(a < b)
        console.log(b + " is greater than " + a);
    else
        console.log("both are same");
}

const a = 100, b = 100;
// isGreater(a, b);    


/* 
the ternary operator:
condition ? condition_is_true : condition_is_false
*/

function isAllowed(age) {
    /*
    if(age > 17)
        return true;
    else
        return false;
    */

    // condition ? condition_is_true : condition_is_false
    return age > 17 ? true : false;
}

let age = 18;
if(isAllowed(age))
    console.log("allowed");
else
    console.log("not allowed");


// another example
checkWinner(true);

function checkWinner(win) {
    win ? console.log("you win") : console.log("you lose")
}