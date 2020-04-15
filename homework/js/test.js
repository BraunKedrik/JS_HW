"use strict"

function alg(a, b){
    a = prompt("Введите a:")
    b = prompt("Введите b:")
    if (a < b){
        alert(a*b)
    }

    else{
        alert(Number(a)+Number(b));
    }
}

alg();