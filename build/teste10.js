"use strict";
const linguagem = (l = "...") => {
    console.log(`melhor linguagem é ${l}`);
};
linguagem("ts");
linguagem("php");
linguagem();
const soma = (N) => {
    let s = 0;
    N.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30];
console.log(soma(numer));
