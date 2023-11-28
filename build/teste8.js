"use strict";
function teste() {
    console.log("teste");
}
function logar(user, senha) {
    console.log(`user ${user}`);
    console.log(`senha ${senha}`);
}
logar("dinho", "123gordinho");
function soma2(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
console.log(soma2(10, 20));
const soma_string = soma2(10, 20).toString();
console.log(soma_string);
console.log(typeof (soma_string));
