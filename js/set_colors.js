//seteando colores

//cuando el documento este listo se ejecuta la función
$(document).ready(setColors);

function setColors() {
  var colors_array = ["yellow", "pink", "orange", "gray", "red", "black", "white"];

  for (var i = 0; i < colors_array.length; i++) {
    // se agrega botones
    $('#changeColor').append('<button class="set_color" id=' + colors_array[i] + ' style="background-color:'+colors_array[i]+'" ></button>')
  }

  $('#changeColor button').click(function(){
    // asignación de color a cada botón
    var selectedColor = $(this).attr('id');
    context.fillStyle = selectedColor;
    context.strokeStyle = selectedColor;
  });
}