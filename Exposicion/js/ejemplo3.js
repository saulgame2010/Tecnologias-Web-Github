'use strict'

function draw() {
    var canvas = document.getElementById("ejemplo3");
    var ctx = canvas.getContext("2d");

    ctx.font = "7pt Helvetica";
    ctx.fillStyle = "blue";
    ctx.fillText("Como dijo el vladimir", 190, 30);
    ctx.fillStyle = "red";
    ctx.fillText("un padre nuestro y a dormir", 170, 50);
    // Cara
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#0597F2";
    ctx.arc(100, 75, 69, 0, 2 * Math.PI, true);
    ctx.stroke();

    // Color de la cara
    ctx.beginPath();
    ctx.fillStyle = "#F24607";
    ctx.arc(100, 75, 69, 0, 2 * Math.PI, true);
    ctx.fill();

    // ojo derecho
    ctx.strokeStyle = "#49D907";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(80, 30);
    ctx.bezierCurveTo(80, 30, 80, 30, 80, 70);
    ctx.stroke();

    // ojo izquierdo
    ctx.strokeStyle = "#970FF2";
    ctx.beginPath();
    ctx.moveTo(115, 30);
    ctx.bezierCurveTo(115, 30, 115, 30, 115, 70);
    ctx.stroke();

    // labio superior
    ctx.strokeStyle = "#EAF205";
    ctx.beginPath();
    ctx.moveTo(55, 70);
    ctx.bezierCurveTo(55, 70, 110, 120, 145, 70);
    ctx.stroke();

    // labio inferior
    ctx.beginPath();
    ctx.moveTo(55, 71);
    ctx.bezierCurveTo(60, 75, 90, 200, 145, 70);
    ctx.stroke();
}