"use strict";
function Fsoma(...n) {
    let s = 0;
    n.forEach((p) => {
        s += p;
    });
    return s;
}
console.log(Fsoma(10, 20, 30, 40, 30));
