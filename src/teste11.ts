function Fsoma (...n: number[]) : number { 
    let s : number = 0;

    n.forEach((p) => {
        s+= p;
    })
    return s;
}
console.log(Fsoma(10,20,30,40,30));

 // n é mais limitado o uso de parametros p causa do rest
 // ou usar um for of, o que for mais conviniente no momento