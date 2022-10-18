// formula: hypotenuse^2 = base^2 + altitude^2

let hypotenuse, base, altitude;

/*
base = window.prompt("enter base value");
altitude = window.prompt("enter altitude value");

base = Number(base);
altitude = Number(altitude);

base = Math.pow(base, 2);
altitude = Math.pow(altitude, 2);

hypotenuse = Math.sqrt(base + altitude);

console.log(hypotenuse);
*/

document.getElementById("submitButton").onclick = function() {
    base = document.getElementById("base").value;
    altitude = document.getElementById("altitude").value;
    
    base = Number(base);
    altitude = Number(altitude);
    
    base = Math.pow(base, 2);
    altitude = Math.pow(altitude, 2);
    
    hypotenuse = Math.sqrt(base + altitude);

    document.getElementById("labelC").innerHTML = "Hypotenuse: " + hypotenuse;
}


