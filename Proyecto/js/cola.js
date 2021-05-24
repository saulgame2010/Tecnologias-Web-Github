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
    let newDiv;

function createElement() {    
    texto = document.getElementById("elemento").value;
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", "nodo");
    newDiv.setAttribute("class", "nodos");   
    let content = document.createTextNode(texto);        
    newDiv.appendChild(content);
    //Si quieres animarlo de la otra forma, deberás borrar esta línea
    newDiv.style.animation = "slidein 2s";
    let divActual = document.getElementById("animacion");            
    //Esto es parte de la otra forma de animarlo
    //newDiv.style.marginBottom = "100%";
    divActual.appendChild(newDiv);
    document.getElementById("elemento").value = "";
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
        document.querySelector(".nodos").classList.add("ocultar");
        setTimeout(() => {
            let elemento = document.getElementById("nodo");
            let padre = elemento.parentNode;        
            padre.removeChild(elemento);
        }, 1000);                
    }
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