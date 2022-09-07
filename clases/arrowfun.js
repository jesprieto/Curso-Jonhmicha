// const saludar = () => console.log('Hola')
// saludar ()


// ``const saludar = nombre => console.log(`Hola ${nombre}`);
// saludar ("Irma");

// const sumar = function (a,b){ 
//     return a+b;
// }``


const sumar  = (a,b) =>a+b;
console.log(sumar(2,3));

const funciondDeVariasLineas = ()=>{
    console.log("uno");
    console.log("uno");
    console.log("uno");
}

funciondDeVariasLineas();

const numeros = [1,2,3,4,5,6,7,8]
numeros.forEach((el, index) => console.log(`El elemento ${el} esta en la posicion ${index}`))

const perro = {
    nombre: "maxi",
    ladrar: ()=>{
        console.log(this)
    }
}
perro.ladrar();