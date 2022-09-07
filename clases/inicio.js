function estoEsUnaFuncion(){
    console.log("UNO");
    console.log("DOS");
    console.log("TRES");
}
function unaFuncionQueDevuelveValor(){
    return 25;
}

let valorDeFuncion =unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);



//function saludar(name, edad){
    console.log(`Hola ni nombre es ${name} y tengo ${edad} años`)
//}



saludar("Maxi", 7);

//FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS//

function funcionDeclarada(){
    console.log ("Esta es una funcion declarada.") 
}
funcionDeclarada();


//funcion anonima
const funcionExpresada = function(){

}
