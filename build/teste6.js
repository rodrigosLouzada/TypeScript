"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
;
console.log(dias.domingo);
console.log(dias["domingo"]);
console.log(dias[0]);
const dia = new Date();
console.log(dia);
console.log(dia.getDate());
console.log(dia.getDay());
console.log(dias[dia.getDay()]);
var usuarios;
(function (usuarios) {
    usuarios[usuarios["user"] = 10] = "user";
    usuarios[usuarios["adm"] = 100] = "adm";
    usuarios[usuarios["super"] = 1000] = "super";
})(usuarios || (usuarios = {}));
;
const user = 1000;
console.log(user);
