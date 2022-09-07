// Funcion anonima autoejecutable

// Clasica
(function(){
console.log("Mi primer IIFE")
})();


(function(d,w,c){
    console.log("Mi segunda IIFE")
    console.log(d);
    console.log(w);
    c.log("este es un console.log");
})(document, window, console);


// Unaria
+function(){
console.log("version Unaria")
}();

// Facebook

!function(){
    console.log("version Facebook")
}();



