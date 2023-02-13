"use strict";

// Crear el objeto Canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

// Crear una imagen de fondo
var backgroundImage = new Image();
backgroundImage.crossOrigin = "null";
backgroundImage.src = "Artboard1.png";

// Esperar a que la imagen de fondo cargue
backgroundImage.onload = function () {
  // Establecer el tamaño del canvas
  canvas.width = backgroundImage.width;
  canvas.height = backgroundImage.height;

  // Dibujar la imagen de fondo en el canvas
  ctx.drawImage(backgroundImage, 0, 0);

  // Leer el archivo de texto
  var textoArchivo = "Texto desde archivo de texto";

  // Establecer la fuente y tamaño de la tipografía

  var miFuente = new FontFace("DXRigaf", "url(fonts/DXRigaf-Regular.ttf)");

  // Esperar a que la fuente cargue
  miFuente.load().then(function (loadedFace) {
    // Agregar la fuente al documento
    document.fonts.add(loadedFace);
  });

  ctx.font = "bold 40px DXRigaf";

  // Establecer el color del texto
  ctx.fillStyle = "black";

  // Establecer la posición del texto
  var textoPosX = 100;
  var textoPosY = 500;

  // Establecer el ancho máximo del texto
  var anchoMaximoTexto = canvas.width - textoPosX * 2;

  // Dividir el texto en partes si es necesario
  var partesTexto = [];
  var textoRestante = textoArchivo;
  while (textoRestante.length > 0) {
    var indiceUltimoEspacio = textoRestante.lastIndexOf(" ", anchoMaximoTexto);
    var parteTexto =
      indiceUltimoEspacio >= 0
        ? textoRestante.substring(0, indiceUltimoEspacio)
        : textoRestante;
    partesTexto.push(parteTexto);
    textoRestante = textoRestante.substring(parteTexto.length).trim();
  }

  // Dibujar el texto en el canvas, dividiéndolo en varias imágenes si es necesario
  for (var i = 0; i < partesTexto.length; i++) {
    // Agregar el texto al canvas
    ctx.fillText(partesTexto[i], textoPosX, textoPosY);

    // Crear una imagen PNG a partir del canvas
    var imagePNG = canvas.toDataURL("image/png");

    // Mostrar la imagen generada en una etiqueta img del HTML
    var img = document.createElement("img");
    img.src = imagePNG;
    document.body.appendChild(img);

    // Limpiar el canvas para la siguiente imagen
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};
