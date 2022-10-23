let grade = [100, 50, 90, 60, 80, 70];

/* traditional functions */
function descending(x, y) {
    return (y - x);
}

function print(element) {
    console.log(element);
}

// grade.sort(descending);
// grade.forEach(print);


/* function expressions */
grade.sort(function(x, y) {
    return (y - x);
});

grade.forEach(function(element) {
    console.log(element);
});


/* arrow function */
grade.sort((x, y) => {
    return (y - x);
});

grade.forEach((element) => {
    console.log(element);
});


/* arrow function - brace can be removed*/
grade.sort((x, y) => y - x);

grade.forEach(element => console.log(element));  