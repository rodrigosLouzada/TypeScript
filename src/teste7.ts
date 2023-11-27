// null - undefined - unknown

let vnome : string|null;
vnome = null;      // é um valor , porém nulo/vazio , há valor
console.log(vnome);

let vnome2; // undefined é qualquer var que não tenha valor atribuido a ela, terá o tipo undefined , não há valor
vnome2 = 30    // logo ao receber, se torna o tipo recebido
console.log(typeof(vnome2));

let num : number = 10;
let vnome3: unknown; // o tipo unknow por mais que receba qualquer valor, ele só pode ser atribuido a vars que sejam unknown ou any 
//originalmente é unknown, portanto, mesmo que o typeof aponte number, ele ainda não pode ser associado/afirmado em outro tipo
// se utilizar quando não souber o tipo de dado que pode vir
//vnome3 = num
//let vnum : number = vnome3;
//console.log(vnum);


//type assertion, afirma agora que de fato ele pode ser associado a outro tipo 
let nvalor : number;
let svalor: string ; 
let uvalor: unknown;

uvalor = 10                // ele vai indicar o tipo number no typeof, mas ainda não pode ser associado, seu tipo original é unknown
nvalor = <number> uvalor;  // ele não pode ser associado a um valor, p mais que seja number até que ocorra o assertion
svalor = <string> uvalor ;
//nvalor = <number> <unknown> svalor; existe esse possibilidade

//  OBS: o  assertion só permite que se receba aquele tipo de valor determinado nele, porém, o unknow pode burlar esse valor
// caso o unknow tenha sido atribuido a um tipo diferente antes, ele burla

// conversão de tipos (é diferente de pode ser associado, o tipo muda)
let qualquerNumbero : number = 10;
nvalor = Number.parseInt(svalor); // é de fato uma conversão de tipo
svalor = qualquerNumbero.toString(); // mesma comversão em sentido contrário

console.log(typeof(uvalor));
console.log(uvalor);

console.log(typeof(nvalor)); // ambos tem o mesmo valor agora, ocorreu a associação
console.log(nvalor);

console.log(typeof(svalor));
console.log(svalor);
