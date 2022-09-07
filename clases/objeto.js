/*const jesus = {
    nombre:"jesus",
    apellido:"prieto",
    edad:"33",
    pasatiempos:["ejercicios","programar"],
    soltero:false,
    contacto:{
        emil:"jesusdavidprieto@gmail.com",
        tw: "jesprieto",
        celular:3022607598,
    },
    saludar:function(){
        console.log("Hola:)")
    }


}
console.log(jesus["contacto"]);
console.log(Object.keys(jesus));
console.log(jesus.hasOwnProperty("pasatiempo"));*/


/*const sacha = {
    nombre: "Sacha",
    saludar: function (){
        console.log(`Hola, me llamo ${this.nombre}`);
    },
    hermano:{
        nombre: "Eric",
        saludar: function() {
            console.log(`Yo, el hermano, me llamo ${this.nombre}`)
        },
    },
};

sacha.saludar();
sacha.hermano.saludar();*/
'Use Strict';

const sacha1 = {
    nombre: "Sacha",
    twitter: "@sachalifs",
    saludar: function (){
            console.log(`Hola, me llamo ${this.nombre}`);
            this.siguemeEnTwitter();
    },

         
    siguemeEnTwitter: function () { 
       console.log(`Hola , sigueme en Twitter ${this.twitter}!`);
    }
    
  // Escribir la funcion como metodo (variable) del objeto, en vez de como funcion suelta 
};

sacha1.saludar();

//Ejmeplo N 2

const sacha2 = {
    nombre: "Sacha",
    saludar: function (gritando, conDespedida){
            const saludoNormal =`Hola, me llamo ${this.nombre}!`;
            const despedidaNormal = "Chau";

            const saludo = gritando ?
                saludoNormal.toUpperCase(): saludoNormal;
            const despedida = gritando ?
                despedidaNormal.toUpperCase() : despedidaNormal;
            console.log(saludo);

            if (conDespedida) {
                console.log(despedida);
            }
        }   
    }

const pepe ={ nombre: "pepe"}
sacha2.saludar(true, true);


// CALL recibe el This y una lista infinita de parametros
sacha2.saludar.call(pepe, true, true);

// APPLY recibe el This y un array
sacha2.saludar.apply(pepe, [true, true]);




 
