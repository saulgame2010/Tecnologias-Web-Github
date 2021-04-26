'use strict'

function draw(){
    var canvas = document.getElementById("ejemplo3");
    var context = canvas.getContext("2d");
    // Cara
context.beginPath();
context.lineWidth = 10;
context.strokeStyle = "rgb(0, 0, 0)";
context.arc(100, 75, 69, 0, 2 * Math.PI, true);
context.stroke();

// Color de la cara
context.beginPath();
context.fillStyle = "rgba(80, 100, 80, 0.4)";
context.arc(100, 75, 69, 0, 2 * Math.PI, true);
context.fill();

// ojo derecho
context.lineWidth = 10;
context.beginPath();
context.moveTo(80, 30);
context.bezierCurveTo(80, 30, 80, 30, 80, 70);
context.stroke();

// ojo izquierdo
context.beginPath();
context.moveTo(115, 30);
context.bezierCurveTo(115, 30, 115, 30, 115, 70);
context.stroke();

// labio superior
context.beginPath();
context.moveTo(55, 70);
context.bezierCurveTo(55, 70, 110, 120, 145, 70);
context.stroke();

// labio inferior
context.beginPath();
context.moveTo(55, 71);
context.bezierCurveTo(60, 75, 90, 200, 145, 70);
context.stroke();
}

