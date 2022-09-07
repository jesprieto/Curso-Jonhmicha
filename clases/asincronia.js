

// console.log("inicio");
// setTimeout(()=>{
//     console.log(" Ejecutando un setTime out, se ejecuta una solavez");

// },3000);


// setInterval(()=>{
// console.log("Esto se ejecuta cada cierto tiempo"
// )
// }, 4000);

// setInterval(() => {
//     console.log("Amo a  JESUS cada segundo");
//     }, 1000);


//  function cuadradoCallback(value, callback) {
//     setTimeout(()=>{
//         callback (value,value*value);
//     }, 0 | Math.random() * 2000 );
//  }

//  cuadradoCallback(0, (value, result) => {
//     console.log("inicia Callback");
//     console.log(`Callback ${value}, ${result}`);
//  })

/* Primer mecanismo para controlar la sincronia  */


// function cuadradoPromise(value) {
//    if (typeof value !== "number"){
//       return Promise.reject(`Error, el valor "${value}"ingresado no es un numero`);
//    }
      
  
//    return new Promise ((resolve, reject) => {
//       setTimeout(() => {
//         resolve({
//          value,
//          result: value*value

//      });
//    }, 0 | Math.random() * 2000 );
//    }); 
// }

// cuadradoPromise(0)
// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    return cuadradoPromise(1);
// })
// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    return cuadradoPromise(2);
// })

// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    return cuadradoPromise(p);
// })

// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    return cuadradoPromise(4);
// })
// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    return cuadradoPromise(5);
// })
// .then((obj)=> {
//    console.log(obj);
//    console.log(`Promise ${obj.value}, ${obj.result}`);
//    console.log("Fin de la Promesa");
// })
// .catch();


/* Funcion asincrona*/

async function funcionAsincronadaDeclarada(){
   try{
      console.log("Inicio de funcion Async Function");
      let obj = await cuadradoPromise(0);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

   } catch(err) { 

   }
}

/* await se usa solo en una funcion Asyncrona*/

funcionAsincronadaDeclarada()

const funcionAsincronadaExpresada = async ()=>{

}

funcionAsincronadaExpresada();