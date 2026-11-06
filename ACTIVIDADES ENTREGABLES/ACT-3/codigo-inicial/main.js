// =====================================================================
// UT03 - Actividad evaluable: Mi ficha personal
// Alumno/a: ...........................................
// Para mostrar resultados en la página usa mostrar("<p>texto</p>").
// =====================================================================

// Objeto con los datos de la ficha (ver apartado 0 del enunciado).
// Se completa en los apartados 1, 2 y 3 y lo usan los apartados 4 y 5.
// Se declara con var (no con let ni const) para que la ventana hija
// pueda acceder a ella con window.opener.ficha.
var ficha = {};

// 1. STRING ------------------------------------------------------------
function analizarNombre() {
  mostrar("<h2>1. Nombre</h2>");
  // Tu código aquí
  // 1.1 Lectura
  let nombre = "";
  while (nombre == "" || nombre == null || nombre == undefined) {
    nombre = prompt("Escriba su nombre");
  }
  mostrar("<p>Nombre:" + nombre + "</p>");

  // 1.2 Normalizacion
  let nombreMinuscSinEspacios = (nombre.trim()).toLowerCase();

  let arrayNombre = nombreMinuscSinEspacios.split(" ");
  for (let i = 0; i < arrayNombre.length; i++ ){
    arrayNombre[i] = (arrayNombre[i]).substring(0, 1).toUpperCase() + arrayNombre[i].substring(1);
  }

  let nombreNormalizado = arrayNombre.join(" ");
  ficha.nombre = nombreNormalizado;

  mostrar("<p>Nombre Normalizado:" + ficha.nombre + "</p>");

  // 1.3 Iniciales, letras y reves
  let iniciales = "";
  let letras = 0;
  let arrayNombreAlReves = [];

  for (let i = 0; i < arrayNombre.length; i++) {

    iniciales += arrayNombre[i].substring(0,1);
    letras += arrayNombre[i].length;

    let palabraReves = "";
    for (let j = arrayNombre[i].length; j > 0; j--) {
        palabraReves += arrayNombre[i].substring(j, j-1);
    }
    arrayNombreAlReves[arrayNombre.length - i] = palabraReves;

  }
  let nombreAlReves = arrayNombreAlReves.join(" ");

  mostrar(
    "<p>Iniciales:" + iniciales + "</p>" + 
    "<p>Cantidad de letras: " + letras + "</p>" + 
    "<p>Nombre al reves: " + nombreAlReves + "</p>"
  );

  // 1.4 DNI 
  let DNI = prompt("Introduzca su DNI");
  let nombreUsuario = "";

  let apellido1 = arrayNombre[arrayNombre.length-2];
  if (apellido1.length < 4) {
    apellido1 = apellido1.padEnd(4, "x")
  }

  nombreUsuario = apellido1.substring(0, 4).toLowerCase();//4 primeros digitos del apellido
  nombreUsuario += arrayNombre[0].substring(0,1).toLowerCase();//primera letra del nombre
  nombreUsuario += DNI.substring(DNI.length-3, DNI.length);//3 ultimas letras del dni
  nombreUsuario = quitarTildes(nombreUsuario);//sin tildes
  mostrar("<p>Nombre de usuario: "+ nombreUsuario + "</p>")

}

// 2. NUMBER Y MATH -----------------------------------------------------
function analizarNumeros() {
  mostrar("<h2>2. Números</h2>");
  // Tu código aquí

  // 2.1 Fecha nacimiento
  let fechaNac = prompt("Introduza su fecha de nacimiento en formato dd/mm/aaaa");
  ficha.textoNacimiento = fechaNac;

  let dia = parseInt(fechaNac.substring(0,2));
  let mes = parseInt(fechaNac.substring(3, 5));
  let anio = parseInt(fechaNac.substring(6));
  mostrar(
    "<p>Fecha nacimiento: " + fechaNac + 
    "<p>Dia en binario, octal, hexadecimal: " + dia.toString(2)  + ", " + dia.toString(8) + ", " + dia.toString(16)+ "</p>" +
    "<p>Mes en binario, octal, hexadecimal: " + mes.toString(2)  + ", " + mes.toString(8) + ", " + mes.toString(16)+ "</p>" +
    "<p>Anio en binario, octal, hexadecimal: " + anio.toString(2)  + ", " + anio.toString(8) + ", " + anio.toString(16)+ "</p>"
  );
  mostrar(
    "<p>Reconversiones" +
    "<p>Dia en binario, octal, hexadecimal: " + parseInt(dia.toString(2), 2)  + ", " + parseInt(dia.toString(8), 8) + ", " + parseInt(dia.toString(16),16)+ "</p>" +
    "<p>Mes en binario, octal, hexadecimal: " + parseInt(mes.toString(2), 2)  + ", " + parseInt(mes.toString(8), 8) + ", " + parseInt(mes.toString(16),16)+ "</p>" +
    "<p>Anio en binario, octal, hexadecimal: " + parseInt(anio.toString(2), 2)  + ", " + parseInt(anio.toString(8), 8) + ", " + parseInt(anio.toString(16),16)+ "</p>"
  );

  // 2.2 Contrasenia
  let contrasenia;
  contrasenia = (ficha.nombre.split(" "))[0];//Longitud del nombre y la primera ya es mayuscula
  while (contrasenia.length < 8) {
    contrasenia += Math.floor(Math.random() * 10);//Añado numeros si es muy pequeña
  }
  contrasenia = contrasenia.substring(0, contrasenia.length-2);//Quito dos caracteres para meter las otras cosas
  contrasenia += Math.floor(Math.random() * 10);//Añadir un numero aleatorio del 1 al 10
  let aleatorio = parseInt(Math.floor(Math.random() * 10));
  let simbolo;//Calcular un simbolo aleatorio
  switch (aleatorio) {
    case 1: simbolo = "."; break;
    case 2: simbolo = "-"; break;
    case 3: simbolo = "_"; break;
    case 4: simbolo = "?"; break;
    case 5: simbolo = "!"; break;
    case 6: simbolo = "$"; break;
    case 7: simbolo = "*"; break;
    case 8: simbolo = "+"; break;
    case 9: simbolo = ":"; break;
    default: simbolo = "@";
  }
  contrasenia += simbolo;
  ficha.contrasena = contrasenia
  mostrar("Su contraseña es " + contrasenia)
}

// 3. DATE --------------------------------------------------------------
function analizarFechas() {
  mostrar("<h2>3. Fechas</h2>");
  // Tu código aquí
  // 3.1 Fecha nacimiento
  let fechaNac = ficha.textoNacimiento;
  let dia = parseInt(fechaNac.substring(0,2));
  let mes = parseInt(fechaNac.substring(3, 5))-1;
  let anio = parseInt(fechaNac.substring(6));

  let fecha = new Date(anio, mes, dia);

  if (fecha.getDate() != dia || fecha.getMonth() != mes || fecha.getFullYear() != anio) {
    mostrar("<p>La fecha introducida es incorrecta</p>");
  }
  // 3.2 Edad
  let ahora = new Date();
  let edad = new Date(ahora.getTime() - fecha.getTime());
  mostrar("<p>Tienes " + (edad.getFullYear() - 1970) + " años</p>");
  ficha.edad = edad.getFullYear();
  mostrar("<p>Has vivido " + Math.floor(edad.getTime()/(1000*60*60*24)) + " dias</p>");
  let diaNac = "";
  switch (fecha.getDay()) {
    case 0:
      diaNac = "Domingo";
      break;
    case 1:
      diaNac = "Lunes";
      break;
    case 2:
      diaNac = "Martes";
      break;
    case 3:
      diaNac = "Miercoles";
      break;
    case 4:
      diaNac = "Jueves";
      break;
    case 5:
      diaNac = "Viernes";
      break;
    case 6:
      diaNac = "Sabado";
      break;
  }
  mostrar("<p>Naciste un " + diaNac + "</p>");
  ficha.diaSemana = diaNac;

  // 3.3 Cumplir 10000
  let diezMilDias = new Date(fecha.getTime() + 1000*60*60*24*10000);
  mostrar("<p>Cumpliste o cumpliras 10.000 dias el " + diezMilDias.getDay() + "/" + (diezMilDias.getMonth()+1) + "/" + diezMilDias.getFullYear() + "</p>");


}

// 4. VENTANAS ----------------------------------------------------------
let ventanaHija = null;

function abrirVentana() {
  mostrar("<h2>4. Ventanas</h2>");
  // Tu código aquí
}

// La ventana hija llama a esta función con window.opener.recibirMensaje(texto)
function recibirMensaje(texto) {
  // Tu código aquí
}

// 5. ALMACENAMIENTO ----------------------------------------------------
function guardarFicha() {
  mostrar("<h2>5. Guardar ficha</h2>");
  // Tu código aquí
}
