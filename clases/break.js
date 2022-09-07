const numeros = [1,2,3,4,5,6,7,8,9,10,11,13,14,12,15,16,17,19,20]

for(let i=0; i <=numeros.length; i=i+2){
    if (numeros %2==0){
        break;
    }
console.log(numeros[i]);  
}


// for(let i=0; i <numeros.length; i++){
//     if (i===5){
//         continue;
//     }
// console.log(numeros[i]);  
// }