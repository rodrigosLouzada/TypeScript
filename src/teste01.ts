class Curso{
    canal = null;
    curso = null;

    constructor(canal : any, curso : any){
        this.canal = canal
        this.curso = curso
    }
}

let c1 = new Curso("dinho" , "gordinho");
console.log(c1.canal, c1.curso);