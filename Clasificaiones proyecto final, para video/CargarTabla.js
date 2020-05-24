//Clase para crear equipos
class Equipo {
    constructor (equipo, puntos){
        this.equipo = equipo,
        this.puntos = puntos;
    }
}
var equipo1 = new Equipo ("Team Papas", 99);
var equipo2 = new Equipo ("Rpm", 91);
var equipo3 = new Equipo ("Speed energy", 84);
var equipo4 = new Equipo ("Levis", 76);
var tabla =[equipo1, equipo2, equipo3, equipo4];



//En esta función se imprimen los nombres de los equipos y los puntajes.
function mostrarTabla(){
  var cuerpoTabla;
  var tablaLlena = "";

  for (let i = 0; i < tabla.length; i++){
    tablaLlena += "<tr><td>"+ tabla[i].equipo + "</td><td>" + tabla[i].puntos + "</td></tr>";
  }
  cuerpoTabla= tablaLlena;
  document.getElementById("equipos-tabla").innerHTML=cuerpoTabla;
}



//Esta función sirve para agregar un nuevo equipo al array de equipos
function nuevoEquipo(){
  //Este es el Json que recibiría
  var tablaJSON = JSON.stringify(tabla);
  //De esta manera convertiría el JSON en un objeto de Javascript
  tabla = JSON.parse(tablaJSON);

  //Aquí se piden los valores para el nuevo equipo
  var nuevoEquipo = prompt("Introduza el nombre del nuevo quipo: ", "Nombre");
  var puntosNuevoEquipo = prompt("Introduzca el puntaje del nuevo equipo: ", "Puntaje");


  var datosNuevoEquipo = new Equipo(nuevoEquipo,puntosNuevoEquipo);
  tabla.push(datosNuevoEquipo);
      //Después de haber modificado mi array con mis datos ahora lo vuelvo a enviar para que se actualice en el servidor
      tablaJSON = JSON.stringify(tabla);
}