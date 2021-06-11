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
        const ponerInicio = document.getElementById("push");
        ponerInicio.addEventListener('click', agregarPrincipio, false);
        const ponerFinal = document.getElementById("pop");
        ponerFinal.addEventListener('click', quitarEnd, false);
        const guardar = document.getElementById("guardar");
        guardar.addEventListener('click', guardarEstructura, false);
        const restaurar = document.getElementById("restaurar");
        restaurar.addEventListener('click', restaurarEstructura, false);
        const limpiar = document.getElementById("limpiar");
        limpiar.addEventListener('click', () => {
            localStorage.clear();
            alert("Se ha limpiado el local storage");
        }, false);
    }
    /* Estas variables son: texto-para el texto que irá dentro de los divs que serán
    los nodos de la estructura, newDiv-es el nodo de la estructura, arrow-es un div
    que contiene dos div que corresponden a la línea y a la punta de flecha(line y point) */
let texto;
let newDiv, arrow, line, point, arrow2, line2, point2;
let pila = [];

function agregarPrincipio() {
    texto = document.getElementById("elemento").value;
    if (texto == "") {
        alert("Necesitas poner un valor");
        return false;
    }
    pila.unshift(texto);
    generarDivs(pila);
}

function quitarEnd() {

}

function generarDivs(lista) {
    var animacionDiv = document.getElementById("animacion");
    if (animacionDiv.hasChildNodes()) {
        while (animacionDiv.childNodes.length >= 1) {
            animacionDiv.removeChild(animacionDiv.firstChild);
        }
    }
    lista.forEach(element => {
        newDiv = document.createElement("div");
        arrow = document.createElement("div");
        line = document.createElement("div");
        point = document.createElement("div");
        arrow2 = document.createElement("div");
        line2 = document.createElement("div");
        point2 = document.createElement("div");
        newDiv.setAttribute("id", "nodo");
        newDiv.setAttribute("class", "nodos");
        arrow.setAttribute("class", "arrow");
        arrow.setAttribute("id", "flecha");
        line.setAttribute("class", "line");
        point.setAttribute("class", "point");
        arrow2.setAttribute("class", "arrow");
        arrow2.setAttribute("id", "flecha");
        line2.setAttribute("class", "line");
        point2.setAttribute("class", "point");
        let content = document.createTextNode(element);
        newDiv.appendChild(content);
        arrow.appendChild(line);
        arrow.appendChild(point);
        arrow2.appendChild(line2);
        arrow2.appendChild(point2);
        newDiv.style.animation = "slidein 3s";
        arrow.style.animation = "flecha 3s";
        arrow2.style.animation = "flecha 3s";
        if (!(document.querySelector(".nodos")) && !(document.querySelector(".arrow"))) {
            animacionDiv.appendChild(arrow2);
            animacionDiv.appendChild(newDiv);
            animacionDiv.appendChild(arrow);
        } else {
            animacionDiv.appendChild(newDiv);
            animacionDiv.appendChild(arrow);
        }
    });
    document.getElementById("elemento").value = "";
}

function highlightFor(id, color, seconds) {
    var element = document.getElementById(id);
    var origcolor = element.style.backgroundColor;
    element.style.backgroundColor = color;
    var t = setTimeout(function() {
        element.style.backgroundColor = origcolor;
    }, (seconds * 1000));
}

function guardarEstructura() {
    localStorage.setItem('pila', JSON.stringify(pila));
    alert('Se guardó tu estructura correctamente en el Local Storage del navegador');
}

function restaurarEstructura() {
    var arrayPila = localStorage.getItem('pila');
    arrayPila = JSON.parse(arrayPila);
    pila = [...arrayPila]
    generarDivs(pila);
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