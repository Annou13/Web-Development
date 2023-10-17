"use strict";

// programming with a loop
export function fiboIt(n) {
    let number1 = 0 ;
    let number2 = 1 ;

    let i = 0;

    while ( i < n ){
        let nbr;

        nbr = number1;


        number1 = number2;

        number2 = nbr + number2;

        i++;
    }

    return number1;


}

// recursive programming
export function fibonaRec(n) {
    if ( n == 0){
        return 0;
    }

    else if (n == 1){
        return 1;
    }

    else 
        return fibonaRec(n-1) + fibonaRec(n-2);

}


// process array with a loop
export function fiboArr(t) {
    let result = [];
    
    for (let i = 0; i < t.length; i++){
        result[i] = fibonaRec(t[i]);
    }

    return result;

}


// use of map
export function fiboMap(t) {
    let result = t.map( x => fibonaRec(x));
    return result;
}