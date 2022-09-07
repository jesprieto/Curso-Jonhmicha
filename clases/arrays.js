const a = []
const b = [1, true, "Hola"]
const c = Array(100).fill(false);
console.log(c);

const d = ["rojo","verde","azul"];
console.log(d);


//Agrega Elemento Push
d.push("Negro");
console.log(d);

//Remueve Elemento Pop
d.pop();
console.log(d);


d.forEach(function(el, index){
    console.log(`<li id="${index}"> ${el}</li>`);
});
