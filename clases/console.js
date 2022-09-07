console.error("esto es un error");
console.warn("aviso");
console.info("info");
console.log("un registro de lo que ha pasado en la app");

console.clear();
console.log(window);
console.log(document);
console.dir(document);
console.clear();
console.groupCollapsed("Cursos de @jhonmircha en YouTube");
console.log("Javascript");
console.log ("CSS");
console.log("Html");
console.groupEnd();
console.table(Object.entries(console));
const numeros =[1,2,3,4],
    vocales = ["a","e","i","o"];

console.table(numeros);
console.table(vocales);

const perro ={
    nombre: "maxi",
    edad:"2 años",
    raza:"criollo",
}

console.table(perro);
console.clear();


console.time("cuanto tiempo tarda mi codigo");
const arreglo = Array (10000);

for (let i = 0; i<arreglo.length; i++){
    arreglo[i]=i;
}

console.timeEnd("cuanto tiempo tarda mi codigo");