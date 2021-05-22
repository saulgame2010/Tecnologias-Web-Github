var x = 40, y = 40, animar;

window.onload = function() {
    const dark = document.getElementById("to-dark");
    const clear = document.getElementById("to-clear");
    const color = document.getElementById("to-color");

    dark.addEventListener('click', cambiarDark, false);    
    clear.addEventListener('click', cambiarClear, false);
    color.addEventListener('click', cambiarColor, false);    
    const ponerCola = document.getElementById("ponerCola");
    //ponerCola.addEventListener('click', comenzar, false);
    ponerCola.addEventListener('click', createElement, false);
    const quitarCola = document.getElementById("quitarCola");
    quitarCola.addEventListener('click', quitarElement, false);
}

/*function comenzar() {
    var canvas = document.getElementById("canvas");
    var lienzo = canvas.getContext("2d");    
    animar = setInterval(function () { animarEsfera(lienzo); }, 50);    
}

function animarEsfera(ctx) {    
    let texto = document.getElementById("elemento").value;
    if(y <= 250){ 
        ctx.clearRect(0, 0, 800, 500);
        ctx.beginPath();
        ctx.fillStyle = "#A6032F";
        ctx.arc(x, y, 17, 0, Math.PI*2, false);
        ctx.fill();  
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "20px Verdana"
        ctx.fillText(texto, x-4, y+4);             
        y = y + 5;          
    } else {        
        clearInterval(animar);
        dibujarEsfera(ctx, x, y, texto)
    }    
}

function dibujarEsfera(ctx, x, y, texto) {
    ctx.clearRect(0,0,800,500);          
    ctx.beginPath();
    ctx.fillStyle = "#A6032F";
    ctx.arc(x, y, 17, 0, Math.PI*2, false);
    ctx.fill(); 
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "20px Verdana"
    ctx.fillText(texto, x-4, y+4)
}*/

function createElement() {
    let span = [...document.getElementsByTagName("SPAN")];
    console.log(span)
    let texto = document.getElementById("elemento").value;
    let newDiv = document.createElement("div");    
    newDiv.setAttribute("id", "nodos");    
    let content = document.createTextNode(texto);        
    newDiv.appendChild(content);        
    let divActual = document.getElementById("animacion");
    newDiv.style.animation = "slidein 2s";
    for(let i; i < span.length; i++) {
        span[i].style.animation = "resaltar 2s";
    }
    divActual.appendChild(newDiv);     
}

function quitarElement() {
    let elemento = document.getElementById("nodos");           
    if(!elemento) {
        alert("La cola está vacía");
    } else {        
        let padre = elemento.parentNode;        
        padre.removeChild(elemento);
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