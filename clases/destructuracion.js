//Sin destructuracion

let numeros = [1,2,3]

let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log (uno, dos, tres)


//Con destructuracion
//Array
const [one, two, three] = numeros ;
console.log (one, two, three);


//Objeto
let persona = {
    nombre:"jesus",
    apellido:"prieto",
    edad:33    
}

let{nombre, apellido, edad}= persona;
console.log(nombre, apellido, edad);