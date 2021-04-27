'use strict'

function draw() {
    var canvas = document.getElementById("ejemplo2");
    var ctx = canvas.getContext("2d");
    //Rectángulos de colores
    var gradient = ctx.createLinearGradient(20, 25, 60, 65);
    gradient.addColorStop(0, "#BF0413");
    gradient.addColorStop(0.2, "#D90467");
    gradient.addColorStop(0.4, "#174FBF");
    gradient.addColorStop(0.6, "#04D98B");
    gradient.addColorStop(0.8, "#F2B705");
    gradient.addColorStop(1, "#BF0413");
    //Rectpangulo sólido
    ctx.fillStyle = "#F6B190";
    ctx.fillRect(5, 5, 40, 40);
    //Rectángulo sin relleno
    ctx.strokeStyle = "#BF1F3C";
    ctx.strokeRect(10, 15, 40, 40);
    //Rectángulo solo trazado y con bordes con gradiente
    ctx.strokeStyle = gradient;
    ctx.strokeRect(20, 25, 40, 40);
    //Triángulo relleno
    ctx.fillStyle = "#F2BB16";
    ctx.beginPath();
    ctx.moveTo(80, 5);
    ctx.lineTo(130, 5);
    ctx.lineTo(80, 65);
    ctx.closePath();
    ctx.fill();
    //Triángulo trazado
    ctx.beginPath();
    ctx.moveTo(84, 65);
    ctx.strokeStyle = "#EF4F2D";
    ctx.lineTo(134, 5);
    ctx.lineTo(134, 65);
    ctx.closePath();
    ctx.stroke();

    var gradient2 = ctx.createLinearGradient(150, 40, 220, 110);
    gradient2.addColorStop(0, "#00ABEB");
    gradient2.addColorStop(0.3, "purple");
    gradient2.addColorStop(0.5, "yellow");
    gradient2.addColorStop(0.7, "red");
    gradient2.addColorStop(0.8, "green");
    gradient2.addColorStop(1, "white");

    ctx.strokeStyle = "#FF0000";
    ctx.strokeRect(5, 80, 70, 60);
    //Círculo sólido de color
    ctx.beginPath();
    ctx.fillStyle = "#318C18";
    ctx.arc(40, 110, 30, 0, 2 * Math.PI, true);
    ctx.fill();
    //Círculo con gradiente radial
    var gradient3 = ctx.createRadialGradient(125, 110, 0, 125, 110, 30);
    gradient3.addColorStop(0, "#E8078A");
    gradient3.addColorStop(0.2, "#E807F2");
    gradient3.addColorStop(0.4, "#9B12DB");
    gradient3.addColorStop(0.6, "#6807F2");
    gradient3.addColorStop(0.8, "#2607E8");
    gradient3.addColorStop(1, "#2607E8");

    ctx.beginPath();
    ctx.fillStyle = gradient3;
    ctx.arc(125, 110, 30, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.strokeStyle = gradient2;
    ctx.strokeRect(90, 80, 70, 60);

    var gradient4 = ctx.createLinearGradient(190, 10, 290, 150);
    gradient4.addColorStop(0, "#D93BAF");
    gradient4.addColorStop(0.2, "#F294D9");
    gradient4.addColorStop(0.4, "#D91ACC");
    gradient4.addColorStop(0.6, "#4F1BBF");
    gradient4.addColorStop(0.8, "#48BED9");
    gradient4.addColorStop(1, "#D93BAF");
    for (let i = 10; i > 0; i--) {
        ctx.strokeStyle = gradient4;
        ctx.lineWidth = i;
        ctx.beginPath();
        ctx.moveTo(190, 10 + (10 - i) * 15);
        ctx.lineTo(290, 10 + (10 - i) * 15);
        ctx.stroke();
    }
}