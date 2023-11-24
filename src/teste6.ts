enum dias{
    domingo = 0,
    segunda = 1,
    terca = 2 ,
    quarta = 3 ,
    quinta = 4 ,
    sexta = 5 ,
    sabado = 6 ,
};

console.log(dias.domingo); // pontuação direta na prop
console.log(dias["domingo"]); // uso [] p acessar ou pelo valor numerico ou de chave(string)
console.log(dias[0]);
//OBS nesse caso, ele consegue obter pelo indice p ser um enum numerico, de string somente por pontuação e pelo valor da chave(string)

const dia = new Date();
console.log(dia);
console.log(dia.getDate()); // dia do mês c base no obj(q tem o valor de hoje)
console.log(dia.getDay()); // dia da semana (0-6)
console.log(dias[dia.getDay()]); 
// utiliza o enum para resgatar o dia da semana correspondente(valor) e trazendo a chave equivalente ao dia de hoje
// o padrão enum é numerico e começando em 0 ordenadamente,(n precisa atribuir valores se começa em 0 e segue a ordem correta):

enum usuarios {
    user =10 ,
    adm = 100,
    super = 1000
};

const user : usuarios = 1000 ;
console.log(user);
/*ao se fazer uma variavel como o tipo de enum que definimos,ele se vê obrigado a ser a propriedade ou o valor que ela contém,
 a saída de dados é o valor da chave Independentemente 
 como se a tipagem não fosse apenas do tipo, mas do valor exato do enum */
 