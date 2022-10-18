//generate random num from 0 to 10
let answer = Math.floor(Math.random() * 10 + 1);
let userGuess, count = 0;

document.getElementById("buttonID").onclick = function() {
    count++;

    let userGuess = document.getElementById("input").value;
    // userGuess = Number(userGuess);
    
    if(userGuess == answer)
        alert(`found! ${count} guesses taken`);     
    else if(userGuess > answer)
        alert("to big");
    else
        alert("to small") ;
}   