/*
Codigo definido una vez, se ejecuta en cualquier momento.
Acepta parametros y devuelve valor
Un tipo especial de objetos
Pueden asignarse a un valor, pueden pasarse como argumentos y usarse como valor retorno.
*/



//Funciones Declaradas
function funcionDeclarada(){
    console.log("uno")
    console.log("dos")
    console.log("tres")

}


//invocacion de Funcion
//funcionDeclarada();//



function unaFuncionQueDevuelveValor(){
    console.log("uno");
    return 19;
    console.log("dos");
    console.log("tres");
return "La funcion ha retornado una cadena de texto";
}

/* let valordeFuncion = unaFuncionQueDevuelveValor();

console.log(valordeFuncion); */

 function saludar(nombre ="Insertar Nombre", edad=undefined){
    if (edad <= 0){
       return ("edad debe ser un numero mayor a 0")}
        else {
            return (`Hola mi nombre es  ${nombre} y tengo ${edad} años de edad.`);        
    }
    
}

console.log(saludar("Jesus", 3));


//saludar();

/* FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS */

//funciondeclarada2();
function funciondeclarada2(){
    console.log("Puede invocarse en cualquier parte del codigo, incluso antes que sea declarada")
}

//funcionExpresada();
const funcionExpresada = function(){
    console.log("Esto es una funcion expresada anonima")

}

//funcionExpresada();