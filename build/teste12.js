"use strict";
class comp {
    nome = "exemplo";
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log(`!!!!!!!`);
    }
}
const comp1 = new comp("user1234", 4, 3);
console.log(comp1);
