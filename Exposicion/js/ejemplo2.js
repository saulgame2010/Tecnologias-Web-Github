'use strict'

function draw() {
    var canvas = document.getElementById("ejemplo2");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(5, 5, 20, 20);
    ctx.fillStyle = "rgb(0, 162, 232)";
    ctx.fillRect(10, 15, 20, 20);
    ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
    ctx.fillRect(20, 25, 20, 20);
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(55, 15);
    ctx.lineTo(335, 24);
    ctx.stroke();
    var gradient = ctx.createLinearGradient(150, 40, 220, 110);
    gradient.addColorStop(0, "#00ABEB");
    gradient.addColorStop(0.3, "purple");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(0.7, "red");
    gradient.addColorStop(0.8, "green");
    gradient.addColorStop(1, "white");

    ctx.fillStyle = gradient;
    ctx.fillRect(150, 40, 70, 70);
    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(80, 70, 70, 60);
    ctx.strokeStyle = gradient;
    ctx.strokeRect(100, 70, 70, 60);
}