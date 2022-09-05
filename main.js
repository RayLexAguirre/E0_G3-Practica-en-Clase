"use strict";

import dado from "./claseDado.js";
import pagoTrabajo from "./claseSueldo.js";
import Rectangulo from "./claseRectangulo.js";
import NomPendiente from "./sinTitulo.js";

let classDado = new dado();
let trabajo = new pagoTrabajo();
let calculos = new Rectangulo(10, 20);
let sinNom = new NomPendiente();

console.log("-------Clase del Martes 17 de Agosto-------");
console.log("-------Ejercicios con Sueldos-------");
console.log(trabajo.sueldo());

console.log("-------Practica del Jueves 19 de Agosto-------");
console.log("-------Ejercicios de Rectangulos-------");
console.log(calculos.obtenerArea());
console.log(calculos.obtenerPerimetro());

console.log("-------Clase del Martes 24 de Agosto-------");
console.log("-------Ejercicios con Dados-------");
console.log(classDado.count());
//console.log(classDado.jugar());
//onsole.log(classDado.demostracion());

console.log("-------Clase del Martes 24 de Agosto-------");
console.log("-------Ejercicios con Dados-------");
console.log(sinNom.invertirCiclo());

let array = [1,8,21,43,56,68,69,90,98];

function intercambioDeElementos(datos, i = 0, j = datos.length -1){

    [datos[i], datos[j]] = [datos[j], datos[i]];
}

function agregar(nuevo){
    for(let i = 0; i < array.length; i++) {
        if (nuevo < array[i]) {
            return i;
        } 
    }
}

console.log("hola", agregar(67));

let posicion = 0;
let eliminable = 56
console.log(array)

function comprovar(){
    for(let i = 0; i < array.length; i++) {
        if (array[i] === eliminable) {
            return posicion = i;
        } 
    }
}

let num = comprovar()
intercambioDeElementos(array, num, array.length - 1);

console.log(array)
array.pop();
console.log(array);

console.log("inicia ciclo")
console.log(array.length, num + 1, num + 2)
for (let i = num, j = num + 1; i <= array.length - 1 && j <= array.length - 1; i++, j++) {
    console.log(i, j);
    intercambioDeElementos(array, i, j)
    console.log(array)
}
console.log("fin ciclo")
console.log(array)
