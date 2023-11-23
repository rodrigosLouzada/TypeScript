let number : number [] = [1,2,3];
//let number: Array<number> = [1,2,3];

number.push(4,5);

//let number_ro : ReadonlyArray<number> = [10,20,30];
let number_ro : readonly number[] = [10,20,30];
console.log(number_ro)

let d : readonly string[]|number[] =["dinho"] 
let kdfnf : (number|string)