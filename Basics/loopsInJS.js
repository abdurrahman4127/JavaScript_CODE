// with while loop
function whileLoop(A, n){ 
    let i = 0;
    while(i < n) {
        if(A[i] % 2 == 0)
            console.log(A[i] + " is even");
        else 
            console.log(A[i] + " is odd");

        i++;
    }
}



// with do-while loop
function doWhileLoop(A, n){ 
    let i = 0;
    do {
        if(A[i] % 2 == 0)
            console.log(A[i] + " is even");
        else 
            console.log(A[i] + " is odd");
         
        i++;
    } 
    while(i < n);
}



// with for loop
function forLoop(A, n){ 
    for(let i=0; i<n; i++) {
        if(A[i] % 2 == 0)
            console.log(A[i] + " is even");
        else 
            console.log(A[i] + " is odd");
    }
}


let A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// forLoop(A, A.length);
// whileLoop(A, A.length);
// doWhileLoop(A, A.length);
