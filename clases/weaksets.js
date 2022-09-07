const ws = new WeakSet ();
let valor1= {"valor1":1};
let valor2= {"valor1":2};
let valor3= {"valor1":3};

ws.add(valor1);
ws.add(valor2);

console.log(ws);


console.log(ws.has(valor1));
console.log(ws.has(valor3));