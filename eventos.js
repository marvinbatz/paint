var movimiento;

// Escuchamos la techa que se oprime -- keydown cuando se oprime, keyup cuando se deja de oprimir
var cuadro = document.getElementById("paint_area");
var paper = cuadro.getContext("2d");

cuadro.addEventListener("mousedown", dibujarMouse);
cuadro.addEventListener("mousemove", dibujo)
cuadro.addEventListener("mouseup", dejarDibujarMouse);

// Paso lienzo como parametro
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 10;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse(evento)
{
    movimiento = 1;
}

function dibujo(evento)
{
    if (movimiento == 1)
    {
        colorLinea = "blue";
        dibujarLinea(colorLinea, evento.clientX-1, evento.clientY-1, evento.clientX+1, evento.clientY+1, paper);
    }
}

function dejarDibujarMouse(evento)
{
    movimiento = 0;
}