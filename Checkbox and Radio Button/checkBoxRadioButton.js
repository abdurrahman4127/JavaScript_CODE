/*    <label for="boxID">subcribe</label>
    <input type="checkbox" id="boxID"> <br>

    <button id="buttonID">hit</button> */


document.getElementById("buttonID").onclick = function () {
    let subcribtion = document.getElementById("boxID");
    let bkash = document.getElementById("bkash");
    let nagad = document.getElementById("nagad");
    let rocket = document.getElementById("rocket");



    if (subcribtion.checked)
        console.log("you have subcribed");
    else
        console.log("you have NOT subcribed");

    
    if (bkash.checked)
        console.log("bkash is selected for payment");
    else if (nagad.checked)
        console.log("nagad is selected for payment");
    else if (rocket.checked)
        console.log("rocket is selected for payment");
    else
        console.log("you must selecte a payment method");
}