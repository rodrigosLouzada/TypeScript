const linguagem = (l: string = "...") : void => {
    console.log(`melhor linguagem é ${l}`);
}

linguagem("ts"); // n ocorre o efeito hosting em arrow function!
linguagem("php");
linguagem();

const soma =(N: number[]): number => {
    let s : number = 0;

    N.forEach((e) => {
        s+= e;
    })

    return s;
}

let numer : number[] = [10,20,30]; //ex : em js ou em app, se usaria um push p colocar os elementos obtios de json, ou html do formulário
console.log(soma(numer));