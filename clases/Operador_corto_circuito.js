/* Cortocircuito AND - cuando el valor de la izquierda
en la expresion siempre pueda validar a false 
es el valor que se cargara por defecto.*/

/* Cortocircuito OR - cuando el valor de la izquierda 
en la expresion siempre pueda validar a true, es el 
valor que se cargarà por defecto.*/


function saludar(nombre){
    nombre= nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

console.log();
saludar("jon");
saludar();


console.clear();

console.log("cadena" || "Valor de la Derecha"); //Si tiende a un valor real o true , este se muestra
console.log(false || "Valor de la Derecha"); //Si tiene un valor que tiende a falso, elige la otra opcion

console.clear();

console.log(false &&  "Valor de la Derecha");