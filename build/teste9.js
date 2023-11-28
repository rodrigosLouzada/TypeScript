"use strict";
function s(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(s(10));
function novoUser(user, pass, nome) {
    console.log(`user ${user},
    pass ${pass},
    nome ${nome}`);
}
console.log(novoUser("dinho", "123"));
