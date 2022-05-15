var movimiento;
var colorSeleccionado;

// Escuchamos la techa que se oprime -- keydown cuando se oprime, keyup cuando se deja de oprimir
var cuadro = document.getElementById("paint_area");
var color = document.getElementById("color_pincel");
var paper = cuadro.getContext("2d");

cuadro.addEventListener("mousedown", dibujarMouse);
cuadro.addEventListener("mousemove", dibujo)
cuadro.addEventListener("mouseup", dejarDibujarMouse);

color.addEventListener("mousedown", colorPincel);

function colorPincel(evento)
{
    colorSeleccionado = color.value;
    console.log(colorSeleccionado);
}

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
    colorPincel();
    if (movimiento == 1)
    {
        dibujarLinea(colorSeleccionado, evento.clientX-1, evento.clientY-1, evento.clientX+1, evento.clientY+1, paper);
    }
}

function dejarDibujarMouse(evento)
{
    movimiento = 0;
}