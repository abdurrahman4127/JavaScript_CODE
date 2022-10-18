/**
Celsius to Fahrenheit	° F = 9/5 ( ° C) + 32
Kelvin to Fahrenheit	° F = 9/5 (K - 273) + 32
Fahrenheit to Celsius	° C = 5/9 (° F - 32)
Celsius to Kelvin	K = ° C + 273
Kelvin to Celsius	° C = K - 273
Fahrenheit to Kelvin	K = 5/9 (° F - 32) + 273
*/

document.getElementById("submit").onclick = function() {
    let F = document.getElementById("F");
    let C = document.getElementById("C");
    let K = document.getElementById("K");

    let answer;

    // farenheit is selected
    if(F.checked) {
        let temp = Number(document.getElementById("temperature").value);
        let f_to_c = (5/9) * (temp - 32); 
        let f_to_k = (temp - 32) * 5/9 + 273.15;
        answer = `${temp}°F in <br> Clecius: ${f_to_c}°C <br> Kelvin: ${f_to_k}K`;
    }
    
    // clecius is selected
    else if(C.checked) {
        let temp = Number(document.getElementById("temperature").value);
        let c_to_f = temp * (9/5) + 32;
        let c_to_k = temp + 273.15;
        answer = `${temp}°C in <br> Farenheit: ${c_to_f}°F <br> Kelvin: ${c_to_k}`;
    } 

    // kelvin is selected
    else if(K.checked) {
        let temp = Number(document.getElementById("temperature").value);
        let k_to_c = temp - 273.15; 
        let k_to_f = (temp - 73.15) * 9/5 + 32;
        answer = `${temp}K in <br> Celcius: ${k_to_c}°C <br> Farenheit: ${k_to_f}°F`;
    }

    // if nothing is selected
    else {
        answer = `you must select a unit`;
        console.log("select something");
    }
    
    document.getElementById("ans").innerHTML = answer;
    // console.log(answer);
}