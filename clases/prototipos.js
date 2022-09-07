 /*POO
 Clases - Modelos a Seguir
 Objeto - es una instancia de una clase
    Atributos: Es una caracteristicas o propiedad del 
    objeto (son variables dentro de un objeto)
    Metodo - Son  las acciones que un objeto puede realizar
    (son funciones dentro de un objeto)
 */ 



 
 
 //Funcion contructora
//  function Animal(nombre,genero){
//         //atributos
//     this.nombre = nombre;
//     this.genero= genero;

//     //metodos
//     this.sonar =function(){
//         console.log("hago sonidos porque estoy vivo")

//     }
// }

// const snoopy = new Animal ("Snoopy", "Macho"),
// lolabunny = new Animal ("lola Bunnyh", "Hembra");


// console.log(snoopy);
// console.log(lolabunny);





 //Funcion contructora donde asignamos los metodos al prototipo , no a la funcion como tal
 function Animal(nombre,genero){
    //atributos
    this.nombre = nombre;
    this.genero= genero;

//metodos agregados al prototypo de la funcion constructora

    Animal.prototype.sonar =function(){
    console.log("hago sonidos porque estoy vivo");
    }
    Animal.prototype.saludar =function(){
    console.log(`hola me llamo ${this.nombre}`);
    }
}

const  a = new Animal ("Snoopy", "Macho");
const   b =  new Animal ("lola Bunny", "Hembra");

const snoopy = a ;
const lolabunny = b;




console.log(snoopy);
console.log(lolabunny); 