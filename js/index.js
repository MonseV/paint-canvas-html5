//JQuery

//cuando el documento este listo se ejecuta la función
$(document).ready(start);

var draw; //es falsa
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var minRadius = 2;
var maxRadius = 30;
save();

function pincelSize(){
  //asignando los tamaños del pincel
  $('#increase').click(function(){
    //aumenta el tamaño del pincel cuando se de click
    radius = radius + 2;
    if (radius >= maxRadius) {
      radius = maxRadius;
    }
    $('#pincelval').text(radius);
  });

  $('#decrease').click(function() {
    //disminuye el tamaño del pincel cuando se de click
    radius = radius - 2;
    if (radius <= minRadius) {
      radius = minRadius;
    }
    $('#pincelval').text(radius);
  });
}

function start(){
  pincelSize();
  //seteando el tamaño de canvas
  canvas.width = window.innerWidth - 15; /*para quitar la barra y tener completo el canvas*/
  canvas.height = window.innerHeight;
  //eventos
  $('#canvas').mousedown(press); //click izquierdo
  $('#canvas').mousemove(paint);
  $('#canvas').mouseup(leave);

  function press(){
    draw = true;
    //donde se hizo click dentro del canvas
    context.moveTo(event.pageX, event.pageY);
  }

  function paint(){
    if (draw){
      //para que el ancho de la linea sea igual que al de los puntos(círculos)
      context.lineWidth = radius * 2
      //punto de inicio
      context.lineTo(event.pageX, event.pageY);//inicio del cursor
      context.stroke();//pinta la línea

      //pinta el arco en la posicion del cursor
      context.beginPath();
                                          //radio, punto donde empieza y termina en grados(1π = 180, 2π = 360)
      /* context.arc(event.pageX, event.pageY, 10, 0, 360); */
      context.arc(event.pageX, event.pageY, radius, 0, 2*Math.PI);
      context.fill(); //rellena el círculo

      //posicion del ultimo punto que se pinto
      context.beginPath();
      context.moveTo(event.pageX, event.pageY); // posicion del mouse
    }
  }

  function leave(){
    //deja de pintar
    draw = false
  }
}

function save(){
  $('#save').click(function(){
    // taDaURL -> representación de la imagen en el formato especificado
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    window.location.href = image;
  });
}