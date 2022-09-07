// let contador = 0;


// while (contador<10){
//     console.log(contador)
//     contador++;
// }


// for (inicializacion de  variable; condicion; decremento o incremento){
//     sentencias que ejecuta el for
// }

for (let i = 0; i < 10; i++) {
    console.log("for"+ i);
    
}

let numeros= [10, 20, 30, 40, 50, 60];
for(let i= 0; i<numeros.length;i++){
    console.log(numeros[i]);
}

const jesus = {
    nombre:"jesus",
    apellido:"prieto",
    contacto:33,}




for (const propiedad in jesus){
    console.log(`key:${propiedad}, Value: ${jesus[propiedad]}`)
}