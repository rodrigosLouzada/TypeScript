function teste() : void {
    console.log("teste")
}

function logar( user: string , senha : string) : void {
    console.log(`user ${user}`);
    console.log(`senha ${senha}`);
}

logar("dinho", "123gordinho");

function soma2(n1: number, n2: number): number{
    let resultado: number = n1+n2;
    return resultado;
}

//soma2(10, 20); nada ocorre, ao especificar o retorno, ele retorna quando alguém fizer a chamada
console.log(soma2(10,20));

const soma_string :string = soma2(10,20).toString(); // pode ser usado os metodos do tipo de retorno(no caso number)
console.log(soma_string); 

// OBS:ao converter pelo metodo, se pode usar uma var de outro tipo com o retorno identico ao tipo convertido pelo metodo, mas o resultado é uma string(o tipo da var)
//OBS: semelhante ao teste 7, onde o assertion só possibilita ser associado a outro tipo pelo unknown, aqui se converte de fato, como o uso dos metodos de conversão como no teste7

console.log(typeof(soma_string)); 
// o mecanismo funciona como number( da função que o chama), mas continua sendo string
// pode ser extremamente útil no caso de querer uma funcionalidade numerica, mas que o resultado seja em outro formato(string)
// como por ex. : somar ou buscar número e pegar um cpf ou usa-lo em banco de dados(string)