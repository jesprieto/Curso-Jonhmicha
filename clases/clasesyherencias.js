    
    class Animal {
    /*El constructor es un metodo especial que se ejecuta en el momento de instancial
    la clase.*/

    constructor(nombre, genero){

    //atributos
    this.nombre = nombre;
    this.genero= genero;
    }
   
    //Metodos
     sonar(){
        console.log("hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}
    //Herencia
    class Perro extends Animal{
        constructor (nombre,genero,tamanio){
        //Manda a llamar el constructor de la clase padre.     
         super(nombre, genero);
         this.tamanio = tamanio;
         this.raza = null;
        }
        
        sonar(){
            console.log("Guauu Guauuu");
        }
        static queEres(){
            console.log("A veces no valoramos a los perros");
        }

        get getRaza(){
            return this.raza; 
        }

        set setRaza(raza){
            this.raza= raza;
        }   
     }

     Perro.queEres();   

  

    //Impresion en Consola
    const mimi = new Animal ("Mimi", "Hembra"),
      scooby = new Perro ("Scooby", "Macho", "gigante");

    console.log(mimi, scooby);
    scooby.sonar();
    scooby.setRaza = "Gran Danes";
    console.log(scooby.getRaza);

  