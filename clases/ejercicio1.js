
/*function contarCaracteres (cadena =""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena")
    }else {
        console.info( `la cadena "${cadena}" tiene ${cadena.length} caracteres`); 
    }
}


contarCaracteres("Esternocleidomastoideo");
contarCaracteres();
*/

const contarCaracteres = (cadena="")=>
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:console.info( `la cadena "${cadena}" tiene ${cadena.length} caracteres`); 

//contarCaracteres("Esternocleidomastoideo");
//contarCaracteres();



/* 2. Programar una funcion que te devuelva el texto recortado segun
el numero de caracteres indicados.*/

const recortarTexto =(cadena="", longitud = undefined)=>
(!cadena) //Si es cierto//
? console.warn("No ingresaste el Texto")
:(longitud===undefined)
  ? console.warn("No ingresaste la longitud para recortar")
  : console.info(cadena.slice(0,longitud));

//recortarTexto("Hola mundo", 4);
//recortarTexto();
//recortarTexto("Hola Hola");
//recortarTexto("",5);




/*3. Programa una funcion que dad una string te devuelva un array de 
textos separados por cierto caracter, pe: miFuncion("hola que tal") devolvera [hola. que. tal.] */


const cadenaAArreglo = (cadena ="", separador= undefined)=>
(!cadena) //Si es cierto//
    ? console.warn("No ingresaste la cadena de Texto")
    :(separador===undefined)
    ? console.warn("No ingresaste el caracter separador")
    :console.info(cadena.split(separador));

//cadenaAArreglo("Lorem ipsun dolor sit amet consectur adpisicing",",");
//cadenaAArreglo("Ener,Feb,Mar,Abr,May",",")





/* 4. Funcion que repita un texto X veces*/


/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const InvertirCadena= (cadena="")  =>
(!cadena)
?console.warn("No Ingresaste ninguna cadena de texto")
:console.info(cadena.split("").reverse().join(""));

//InvertirCadena();
//InvertirCadena("Hola Jesus");



/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const textoEnCadena= (cadena ="", texto="") =>{
    if(!cadena) return console.warn("No Ingresaste texto largo");

    if (!texto) return console.warn("No Ingresaste ninguna palabra a evaluar");

    let i=0,
    contador=0;
    while (i !== -1){
        i = cadena.indexOf(texto, i);
        if (i !== -1){
            i++;
            contador++;
        } 
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);

}
//textoEnCadena();
//textoEnCadena("","mundo");
//textoEnCadena("Hola mundo y Adios mundo y que mas mundo","mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
const palindromo = (palabra ="")=>{
    if (!palabra) return console.warn("No ingresaste una palabra o frase");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra=== alReves)
    ?console.info (`Si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
    : console.info (`No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`);
}
// palindromo();
// palindromo(" Hola JEsus");
// palindromo("salas");


/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (texto="", patron="") =>
(!texto)
? console.warn("No ingresaste texto")
:(!patron)
 ? console.warn(" No ingresaste patron")
 :console.info(texto.replace(new RegExp(patron, "ig"), ""));

 //eliminarCaracteres();
 //eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5"); 
 //eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]");


 /*9) Numerno ramdom de 501 y 600*/

 const aleatorio = () =>console.info(Math.round((Math.random()*100)+500 ));
 //aleatorio();




 /*10) reciba un numero y evalue si es capicua, se lee igual al reves y devuelva un Boolean */
 const capicua = (numero= 0 ) =>{
    if (!numero) 
        return console.warn("No ingresaste  un numero");
    if (typeof numero !== "number") 
        return console.error(`El valor "${numero}" ingresaro, No es un numero`);
    
    numero = numero.toString();
    let alreves = numero.split("").reverse().join("");
    
    return  ((numero) === alreves) 
        ? console.info (true)
        : console.info(false)
 }
 //capicua(2002);
 //capicua(2006);

/*11)12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const numeroPrimo = (numero = undefined)=> {
    if (numero  === undefined) 
        return console.warn("No ingresaste Numero");
    if (typeof numero !== "number") 
        return console.error(`EL numero "${numero}" ingresado, No es un numero primo`);

    let divisible = false;
    for(let i =2; i < numero; i++){
        if ((numero % i) === 0){
            divisible = true;
            break;
        }
    } 
    return (divisible)
    ? console.log (`El numero ${numero}, No es primo`)
    : console.log (`El numero ${numero}, SI es primo`);
}

//numeroPrimo();
//numeroPrimo(320);
//numeroPrimo(1);






/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/






/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */





const convertirBinarioDecimal = ( numero = undefined, base = undefined ) => {
    if (numero === undefined) return console.info("No ingresaste numero a convertir");

    if (typeof numero !== "number") return console.info(`El valor "${numero}" NO es un numero`);

    if (base === undefined) return console.info("NO ingresaste la base a converti");

    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, No es un numero`);


    if (base === 2) {
        return console.info(`${numero}  base ${base} = ${parseInt(numero, base)} base 10`);
    }

}

// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100, 2);


/*15 ) sacarle el 20 porciento a un precio*/

const aplicarDescuento = (monto = undefined, descuento = 0) =>{
    if (monto === undefined) return console.info("No ingresaste el monto");
    
    if (typeof monto !=="number") return console.info(`El valor "${monto}" ingresado, No es un numero`);

    if (Math.sign(monto)=== -1) return console.error ("Error descuento no puede ser negativo");

    return console.info(`$${monto} - ${descuento}% = $${monto-((monto*descuento)/100)}`)

}


// aplicarDescuento();
// aplicarDescuento("200");
// aplicarDescuento(1000, 25);








