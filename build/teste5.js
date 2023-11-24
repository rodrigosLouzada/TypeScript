"use strict";
let dados = {
    cor: "preto",
    idade: 25,
    ola: () => { console.log("oi"); },
    info: (who) => { console.log(`ola ${who}`); }
};
console.log(typeof (dados), dados);
dados.info(dados.cor);
dados.info("rodrigo");
dados.ola();
