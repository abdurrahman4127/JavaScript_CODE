let counter = 0;

// decrease by 1
document.getElementById("decrese").onclick = function() {
    counter = counter - 1;
    document.getElementById("countLabel").innerHTML = counter;
}

// reset to zero
document.getElementById("reset").onclick = function() {
    counter = 0;
    document.getElementById("countLabel").innerHTML = counter;
}

// increase by 1
document.getElementById("increase").onclick = function() {
    counter = counter + 1;
    document.getElementById("countLabel").innerHTML = counter;
}