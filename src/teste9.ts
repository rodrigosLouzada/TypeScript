function s (n1: number  = 0, n2: number = 0) : number  {
    return n1+n2;
}

console.log(s(10)); 
// definir valores padroes torna possivel q não receba todos os parametro, ele assume o valor padrão, no caso, do parametro n usado
// no caso, ainda são parametros obrigatorios, assumidos p valor padrão.

function novoUser(user : string , pass : string , nome ? : string) :void {
    console.log(
    `user ${user},
    pass ${pass},
    nome ${nome}`);
}

console.log(novoUser("dinho", "123"));  
 //torna opcional de fato o parametro ao usar o '?', torna ele o tipo declarado e undefined ao mesmo tempo