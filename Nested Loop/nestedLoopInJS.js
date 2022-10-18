let symbol = window.prompt("enter a symbol");

let row = window.prompt("enter row number");
let col = window.prompt("enter column number");

for(let i=0; i<row; i++) {
    for(let j=0; j<col; j++) {
        document.getElementById("labelID").innerHTML += symbol;
    }
  
    document.getElementById("labelID").innerHTML += "<br>"; // a line brake in html
}  