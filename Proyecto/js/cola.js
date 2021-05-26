window.onload = function() {
    //estas tres líneas son para obtener el cambiador de tema
    const dark = document.getElementById("to-dark");
    const clear = document.getElementById("to-clear");
    const color = document.getElementById("to-color");
    /*Las sig tres líneas son para agregar el evento click
    y así llamar a las funciones que cambian el tema de la página*/
    dark.addEventListener('click', cambiarDark, false);    
    clear.addEventListener('click', cambiarClear, false);
    color.addEventListener('click', cambiarColor, false);
    /*Estas líneas son los botones que llaman a la funcion de crear
    y eliminar elemento para la animación de la cola*/   
    const ponerCola = document.getElementById("ponerCola");    
    ponerCola.addEventListener('click', createElement, false);
    const quitarCola = document.getElementById("quitarCola");
    quitarCola.addEventListener('click', quitarElement, false);
    const guardar = document.getElementById("guardar");
    guardar.addEventListener('click', guardarEstructura, false);
    const restaurar = document.getElementById("restaurar");
    restaurar.addEventListener('click', restaurarEstructura, false);
    const limpiar = document.getElementById("limpiar");
    limpiar.addEventListener('click', () => {
        localStorage.clear();
        console.log(cola);
    }, false);
}
/* Estas variables son: texto-para el texto que irá dentro de los divs que serán
los nodos de la estructura, newDiv-es el nodo de la estructura, arrow-es un div
que contiene dos div que corresponden a la línea y a la punta de flecha(line y point) */
let texto;
let newDiv, arrow, line, point;
let cola = [];

function createElement() {
    /* Cuando se llama a esta función con el botón de agregar elemento se obtiene el valor
    que se puso en el input, ese será el texto que pondremos en el nodo que se va a agregar */
    texto = document.getElementById("elemento").value;
    cola.push(texto);
    /* ----------CREAR EL NODO CON LA FLECHA--------- */
    /* aquí se crean 4 divs, uno que es el nodo, otro que es el contenedor de la flecha
    y los otros dos son los elementos de la flecha, la línea y la punta de flecha, en este
    respectivo orden */
    newDiv = document.createElement("div");
    arrow = document.createElement("div");
    line = document.createElement("div");
    point = document.createElement("div");
    /* ----------/CREAR EL NODO CON LA FLECHA--------- */
    /* ----------ESTABLECIENDO LOS ATRIBUTOS--------- */
    /* Aquí se establecen atributos, especificamente id y class eso es muy importante
    porque son los que nos van a ayudar a hacer referencia a estos elementos tanto en
    javascript como en css, los responsables de hacer las animaciones y establecer los
    estilos */
    newDiv.setAttribute("id", "nodo");
    newDiv.setAttribute("class", "nodos");
    arrow.setAttribute("class", "arrow");
    arrow.setAttribute("id", "flecha");
    line.setAttribute("class", "line");
    point.setAttribute("class", "point");
    /* ----------/ESTABLECIENDO LOS ATRIBUTOS--------- */
    //Aquí content es el texto del nodo el cual tomamos del input
    let content = document.createTextNode(texto);
    /* ----------AGREGANDO HIJOS A CADA DIV--------- */
    /* Con appendChild lo que hacemos es asignar un elemento hijo al div que queramos
    en este caso al nodo (newDiv) le estamos estableciendo el texto y al div arrow le
    estamos agregando la línea y la punta de flecha para poder armar la felcha completa */
    newDiv.appendChild(content);
    arrow.appendChild(line);
    arrow.appendChild(point);
    /* ----------/AGREGANDO HIJOS A LOS DIV--------- */
    /* Estas dos líneas establecen la animación ya hecha en el archivo cola.css y el tiempo
    que va a durar la animacion */
    newDiv.style.animation = "slidein 3s";
    arrow.style.animation = "flecha 3s";
    /* Aquí obtenemos el div que ya está en el html de cola.html el cual tiene id="animacion"
    para después agregarle como hijos al newDiv (el nodo) y el div de la flecha (arrow) */
    let divActual = document.getElementById("animacion");                
    divActual.appendChild(newDiv);
    divActual.appendChild(arrow);
    //Este es para borrar lo que hay en el input una vez que se agrega un elemento
    document.getElementById("elemento").value = "";
    /*---------ANIMAR EL CÓDIGO EN C--------- */
    /* Este código llama a la función highlightFor que es la que resalta las líneas de código
    que "se ejecutan" al momento de hacer una inseción a la cola, la función setInterval lo que
    hace es que es llamada por el navegador el tiempo indicado, el primer argumento es una función
    ya sea una función declarada aparte, una función anónima o una función de flecha (o callback)
    en este caso usé un callback porque se ve mas mamón jajaja. Primero inicializo un contador en 1
    porque son 6 líneas de código las que, según yo, se ejecutan para la inserci+on en la cola
    así que condiciono, si el contador es menor a 7, llamo a la función que resalta el código
    mandándole el id del span que contiene la linea, el color del que la resalta y el tiempo que
    quiero que se tarde para resaltarlo */
    let cont = 1
    var interval = setInterval(() => {
        if(cont < 7) {
            highlightFor("qCode"+cont, "#A6032F", 0.5);
            cont++;
        } else {
            /* esta función lo que hace es detener las llamadas a la función setInterval, ya que el
            navegador todo el puto tiempo llamará a la función si es que no lo detenemos, entonces se
            detiene cuando mi contador ya deja de cumplir la condición que se estableció para llamar
            la función que resalta el texto, esta función resibe como argumento la función que queremos
            detener */
            clearInterval(interval);
        }
    }, 500);   
    /*---------/ANIMAR EL CÓDIGO EN C--------- */
    //Esta es otra forma de animarlo >:(
    //Esto es parte de la otra forma de animarlo
    //newDiv.style.marginBottom = "100%";
    //let cont = 0;
    /*var animar = () => {               
        if(cont < 1666){
            var newMgBottom = (100 - ((cont)/1000) * 100);
            newDiv.style.marginBottom = newMgBottom + "%";
            cont+=10;
            if(newMgBottom > 0) {
                window.requestAnimationFrame(animar);
            }   jsjasjasjasjas jasjsjsfoewofewojnf
        }              
    };
    animar();*/
}

function quitarElement() {         
    if(!elemento) {
        alert("La cola está vacía");
    } else {    
        /* Aquí se verifica si existen algún div que corresponda al nodo con su flecha
        si no existe ningún elemento entonces la cola está vacía y se avisa al usuario  */
        if(!(document.querySelector(".nodos")) && !(document.querySelector(".arrow"))){
            alert("La cola está vacía");
        } else {
            /* Si existe algún elemento entonces vamos a agregar una clase llamada ocultar
            al elemento, esa clase tiene en el archivo styles.css unos estilos que hacen que se
            desvanezca */
            document.querySelector(".nodos").classList.add("ocultar");
            /* Este es el mismo código para animar el código en C pero ahora aplicado para
            eliminar un elemento de la cola */
            cola.shift();
            let cont = 1
            var interval = setInterval(() => {
                if(cont < 7) {
                    highlightFor("dCode"+cont, "#A6032F", 0.5);
                    cont++;
                } else {
                    clearInterval(interval);
                }
            }, 500);
            /* setTimeout es parecida a setInterval, solo que, a diferencia de setInterval
            setTimeout solo es llamada una única vez por el navegador y no a cada rato como setInterval */
            setTimeout(() => {
                /* Aquí obtenemos los divs que corresponden al nodo, la flecha y la animación
                y simplemente los eliminamos del área de animación con removeChild */
                let elemento = document.getElementById("nodo");
                let flecha = document.getElementById("flecha");
                let divPadre = document.getElementById("animacion");
                divPadre.removeChild(elemento);
                divPadre.removeChild(flecha);                
            }, 1000);
        }                              
    }
}

function highlightFor(id, color, seconds){
    var element = document.getElementById(id);
    var origcolor = element.style.backgroundColor;
    element.style.backgroundColor = color;
    var t = setTimeout(function(){
    element.style.backgroundColor = origcolor;
    },(seconds*1000));
}

function guardarEstructura() {
    localStorage.setItem('cola', JSON.stringify(cola)); 
    alert('Se guardó tu estructura correctamente en el Local Storage del navegador');   
}

function restaurarEstructura() {
    var arrayCola = localStorage.getItem('cola');
    arrayCola = JSON.parse(arrayCola);
    cola = [...arrayCola]
    var animacionDiv = document.getElementById("animacion");
    if(animacionDiv.hasChildNodes()) {
        while(animacionDiv.childNodes.length >= 1) {
            animacionDiv.removeChild(animacionDiv.firstChild);
        }
    }
    arrayCola.forEach(element => {
        newDiv = document.createElement("div");
        arrow = document.createElement("div");
        line = document.createElement("div");
        point = document.createElement("div");
        newDiv.setAttribute("id", "nodo");
        newDiv.setAttribute("class", "nodos");
        arrow.setAttribute("class", "arrow");
        arrow.setAttribute("id", "flecha");
        line.setAttribute("class", "line");
        point.setAttribute("class", "point");
        let content = document.createTextNode(element);
        newDiv.appendChild(content);
        arrow.appendChild(line);
        arrow.appendChild(point);
        newDiv.style.animation = "slidein 3s";
        arrow.style.animation = "flecha 3s";                        
        animacionDiv.appendChild(newDiv);
        animacionDiv.appendChild(arrow);
    });
}

function cambiarDark() {
    const tema = document.getElementById("theme");
    tema.href = "css/dark.css";
}

function cambiarClear() {
    const tema = document.getElementById("theme");
    tema.href = "css/clear.css";
}

function cambiarColor() {
    const tema = document.getElementById("theme");
    tema.href = "css/color.css";
}