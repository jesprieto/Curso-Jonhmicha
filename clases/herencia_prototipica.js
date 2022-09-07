

    //Funcion contructora donde asignamos los metodos al prototipo , no a la funcion como tal
 
    function Animal(nombre,genero){
    //atributos
    this.nombre = nombre;
    this.genero= genero;
}

    //Metodos agregados al prototipo de la funcion constructora

    Animal.prototype.sonar =function(){
    console.log("hago sonidos porque estoy vivo");
    }
    Animal.prototype.saludar =function(){
    console.log(`hola me llamo ${this.nombre}`);
    }


    //Herencia prototipica

    function Perro(nombre, genero, tamanio){
    this.super = Animal;
    this.super =(nombre,genero);
    this.tamanio = tamanio;

}
    //Perro esta heredando de animal

    Perro.prototype = new Animal();
    Perro.prototype.constructor= Perro;


    //Sobreescritura de metodos del prototipo padre en el hijo.

    Perro.prototype.sonar =function(){
    console.log("soy un perro y mi sonido es un ladrido")
}

    Perro.prototype.ladrar = function(){
    console.log("Guauu Gauuuu")
}


    //Impresion en Consola
    const snoopy = new Perro ("Snoopy", "Macho", "Mediando");
    const lolabunny = new Animal ("lola Bunny", "Hembra");

    console.log (snoopy);
    console.log (lolabunny);

    snoopy.sonar();
    snoopy.ladrar();