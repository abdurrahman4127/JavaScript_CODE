/* 
let username = window.prompt("enter your name");
console.log(username);
*/

let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
}
