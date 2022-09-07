
let nombre = "Jesus",
    edad = 7;


const aguila = {
    nombre:nombre,
    edad:edad,
    volar: function(){
        console.log("fly fly")
    }
}

console.log(aguila);
aguila.volar()

// const ave = { 
//     nombre,
//     edad,
//     raza:"callejero",
//     volar(){
//         console.log("fly fly")
//     }
//     }

//     console.log(ave)
//     ave.volar()


const usuario ={
    nombre,
    edad,
    contrato:'0X005hyi6u8',
    acceso(){
        console.log("concedido")
    }
}
console.log(usuario);
usuario.acceso();
console.log(usuario.contrato);


let Mywallet = '0';
let monederos= ['0X005hyi6u8', '0X005hNi6u8','0X006hNi6u8'];
if(Mywallet === monederos.values){
    console.log(true);
}

