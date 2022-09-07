let id = Symbol();
let id2=  Symbol();

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);

/* Se usan para identificar propiedades de objetos*/

const NAME = Symbol("Nombre");
const SALUDAR = Symbol("Saludar");

const persona = {
 [NAME]: "Jon", 
 edad: 34  
};

console.log(persona);

persona.NOMBRE= "Jhonatan Mircha"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NAME]);


persona[SALUDAR] =function(){
    console.log("Hola");
}
console.log(persona);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log (Object.getOwnPropertySymbols(persona));