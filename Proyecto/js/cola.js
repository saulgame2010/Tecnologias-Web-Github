var x = 40, y = 40, animar;

window.onload = function() {
    const dark = document.getElementById("to-dark");
    const clear = document.getElementById("to-clear");
    const color = document.getElementById("to-color");

    dark.addEventListener('click', cambiarDark, false);    
    clear.addEventListener('click', cambiarClear, false);
    color.addEventListener('click', cambiarColor, false);    
    const ponerCola = document.getElementById("ponerCola");    
    ponerCola.addEventListener('click', createElement, false);
    const quitarCola = document.getElementById("quitarCola");
    quitarCola.addEventListener('click', quitarElement, false);
}

    let texto;
    let newDiv, arrow, line, point;

function createElement() {    
    texto = document.getElementById("elemento").value;
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
    let content = document.createTextNode(texto);        
    newDiv.appendChild(content);
    arrow.appendChild(line);
    arrow.appendChild(point);
    //Si quieres animarlo de la otra forma, deberás borrar esta línea
    newDiv.style.animation = "slidein 3s";
    arrow.style.animation = "flecha 3s";
    let divActual = document.getElementById("animacion");            
    //Esto es parte de la otra forma de animarlo
    //newDiv.style.marginBottom = "100%";
    divActual.appendChild(newDiv);
    divActual.appendChild(arrow);
    document.getElementById("elemento").value = "";
    let cont = 1
    var interval = setInterval(() => {
        if(cont < 7) {
            highlightFor("code"+cont, "#A6032F", 0.5);
            cont++;
        } else {
            clearInterval(interval);
        }
    }, 500);   
    //Esta es otra forma de animarlo >:(
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
        if(!(document.querySelector(".nodos")) && !(document.querySelector(".arrow"))){
            alert("La cola está vacía");
        } else {
            document.querySelector(".nodos").classList.add("ocultar");
            setTimeout(() => {
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