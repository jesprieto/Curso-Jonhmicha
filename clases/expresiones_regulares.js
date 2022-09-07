

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias corrupti nostrum mollitia laborum error, sint ratione eligendi nulla? Repellendus esse aperiam recusandae! Asperiores,consectetur quod delectus sunt repudiandae voluptatibus.";

let expReg = new RegExp("lorem","ig");
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));


let expReg2 =  /lorem{1,}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));