


const set = new Set ([1,2,3,3,4,5,5,true,false,{},{}, "hola", "HOLA"]);
console.log(set);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

// for (item of set) {
// console.log(item);
// }


console.log("Recomiendo set2");
set2.forEach(item=> console.log((item)));

console.log(set[0])

/*Valor de tipo iterable, cualquier dato que permita contar
sus elementos */


const Arr = Array.from(set)
console.log(Arr);
console.log(Arr[9]);

/* Los valores de un set , es una coleccion de datos unicos*/ 

set.delete("HOLA");
console.log(set);

/*Valida si un dato existe o no */
console.log(set.has("hola"));

/* Limpiar un arreglo*/
set2.clear();
console.log(set2);