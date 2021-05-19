window.onload = function () {
    cargarElementos();
};

function cargarElementos() {
    alert('Si jala');
    const tema = document.getElementById("#theme");
    const dark = document.getElementById("#to-dark");
    const clear = document.getElementById("#to-clear");
    const color = document.getElementById("#to-color");    
    
    dark.addEventListener('click', function(event) {
        tema.href = "css/dark.css"
    }, false);
    clear.addEventListener('click', function(event) {
        tema.href = "css/clear.css"
    }, false);
    color.addEventListener('click', function(event) {
        tema.href = "css/color.css"
    }, false);
}