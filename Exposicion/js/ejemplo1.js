'use strict'


function draw() {
    var canvas = document.getElementById("ejemplo1");
    var ctx = canvas.getContext("2d");

    ctx.fillRect(5, 5, 100, 100);
    ctx.clearRect(25, 25, 60, 60);
    ctx.strokeRect(30, 30, 50, 50);
    ctx.strokeRect(110, 2, 105, 105);

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.arc(135, 25, 20, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.stroke();

    ctx.font="italic 10px arial";
    ctx.fillText("rectangulo", 32, 60);
    ctx.font="italic 35px arial";
    ctx.strokeText("que onda", 5, 140);

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.arc(135, 80, 20, 0, .5 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.arc(190, 25, 20, 0, 1 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.arc(190, 80, 20, 0, 1.5 * Math.PI, true);
    ctx.stroke();

    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(230, 10);
    ctx.bezierCurveTo(230, 10, 270, 140, 290, 30);
    ctx.stroke();

    ctx.beginPath(); //inicia una figura
    ctx.moveTo(230, 100); //nos trasladamos al punto inicial de la figura
    ctx.lineTo(290, 100); //dibuja una linea recta desde el punto anterior al indicado
    ctx.lineTo(230, 140); 
    ctx.closePath(); //cierra la figura uniendo los puntos
    ctx.fill(); //rellena la figura
}