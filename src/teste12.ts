class comp {
    nome : string = "exemplo" ;                //nome? : string ;   
    ram : number;
    cpu : number;
    ligado: boolean;

    constructor(nome: string , ram : number , cpu : number ) {   // cpu : number = 122222
        this.nome = nome;
        this.ram = ram;
        this.cpu =cpu;
        this.ligado = false;

        console.log(`!!!!!!!`);
    }
}

const comp1 = new comp("user1234" , 4 , 3);
// comp1.nome = "dinho"; // se pode reatribuir parametros e seus valores da classe original p pontuação

console.log(comp1);

//o  this se refere a propriedade da classe, e não a parametro de mesmo nome no construtor(q sera o recebido pelo instancia),
//esse valor recebe sobreescreve o valor padrão da classe, (se ele for atribuido antes)
// se pode inicializar um valor padrão, assim ele pode ignorar o parametro do usuário se n o colocar, ou usar o '?'
// ou declarar o valor da prop no construtor, diferente de inicializar na prop da classe(ali em cima), no construtor ele já inicializa automaticamente