//document.querySelectorAll("a").forEach((ol)=>console.log(ol));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelectorAll(".link-dom").href);
// console.log(document.querySelectorAll(".link-dom").getAttribute("href"));
document.documentElement = "en"
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM= document.querySelector(".link-dom");
/*---------------------------------------*/


$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com")
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

/*------------------------------------------*/




//Data-Attributes
/* Ejercicio #1
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

/* Ejercicio #2
$linkDOM.setAttribute("data-description", "modelo de objeto del Documento")
console.log($linkDOM.dataset.description);*/

console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.color);
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

/*  Ejercicio*/
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "14%";
$linkDOM.style.textAlign ="center";
$linkDOM.style.marginLeft ="auto";
$linkDOM.style.marginRight ="auto";
$linkDOM.style.padding ="1rem";
$linkDOM.style.borderRadius =".5rem";

/* VARIABLES CUSTOM PROPERTIES CSS*/

/* Creacion de las Variables Html y Body*/
const $html =document.documentElement, $body =document.body;

/* Llamar las propiedades para cambiar Color*/
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

/*Imprimir en Consola para ver colores hexagesimales*/
console.log(varDarkColor, varYellowColor);

/*Cambiar en el DOM el color de letra y fondo del cuerpo de la pagina*/
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

/*Cambiar Color del Html*/
/*$html.style.setProperty("--dark-color", "pink");*/

/*Color no cambia, procedemos a cambiar la propiedad color enlazada al Body */
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);


/*--------------------------------DOM CLASES CSS----------------------------------------- */

/* Crear constante para seleccionar la Clase con la que trabajaremos */
const $card = document.querySelector(".card")

/* Agregar y remover una clase*/
$card.classList.add("rotate-45");

/* Agregar mas de una clase a la vez*/
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("rotate-45");

/* Alternar clase*/
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");

/*Reemplazar clase */
$card.classList.replace("rotate-45", "rotate-135");


/*--------------------------------DOM TEXTO Y HTML----------------------------------------- */

/* Cambiar contenido de Texto en Html */

// const $whatIsDom = document.getElementById("que-es");
// let text = `<p> Es una API para documentos hmtl y XML.</p>
// <p> Este provee una <i> representacion estructural del document</i>, permitiendo modificar su 
// contenido y presentacion visual mediante codigo JS </p> `;

// /* Ejecutar texto en Html */
// //$whatIsDom.innerText = text;//
// $whatIsDom.textContent = text;

// /* Ejecutar texto en Html CORRECTAMENTE */
// $whatIsDom.innerHTML = text;
// $whatIsDom.outerHTML = text;

/*--------------------------------DOM Traversing----------------------------------------- */

// const $cards = document.querySelector(".cards");
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousSibling);
// console.log($cards.previousElementSibling);
// console.log($cards.children[3].closest("section"));


/*---------------------------CREANDO ELEMENTOS Y FRAGMENTOS----------------------------- */


/* Se puede crear cualquier etiqueta valida de html dentro del dom*/
/* No tiene atributos pero si un nodo de texto, se debe crear el SRC y ALT*/

const   $figure = document.createElement("figure"),
        $img = document.createElement("img"),
        $figcaption = document.createElement("figcaption"),
        $figcaptionText = document.createTextNode("Animals"),
        $cards = document.querySelector(".cards");
        
        /*---Agregagamos una nuva figure ---*/
        $figure2 = document.createElement("figure");

        /* Variables creadas por mi */
        $src = "src";
        $link = "https://placeimg.com/200/200/animals";
        
        /*Agregamos  atributos de SRC y ALT a la Imagen */

        $img.setAttribute( $src, $link);
        $img.setAttribute("alt", "Animals");

        /*Agregamos  una nueva clase CARD a la etiqueta Figure */   

        $figure.classList.add("card");

        /*Agregamos  los nodos img, figcaption y figure dentro de FIGURE */
        $figcaption.appendChild($figcaptionText);
        $figure.appendChild($img);
        $figure.appendChild($figcaption);
        $cards.appendChild($figure);

        /*Agregamos  con innerHTML las lineas de codigo completa */

        $figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
        <figcaption>People</figcaption>`;

        $figure2.classList.add("card");
        $cards.appendChild($figure2);

        const estaciones = ["primavera","verano","otoño","invierno"]
            $ul = document.createElement("ul");
            document.write("<h3> Estaciones del Año </h3>");

