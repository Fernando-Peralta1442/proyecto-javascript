//proyecto de bingo , 2da pre entrega//

let numinicial=1,numfinal=75
let sigue,letra
do{
    numero=Math.round(Math.random()*(numinicial-numfinal)+numfinal);
    if (numero>=1 && numero<=15) letra= "B"
    if (numero>=16 && numero<=30) letra= "I"
    if (numero>=31 && numero<=45) letra= "N"
    if (numero>=46 && numero<=60) letra= "G"
    if (numero>=61 && numero<=75) letra= "O"

    console.log(letra+numero);

    sigue=prompt("Desea sacar una bolilla? S/N")
}while(sigue=="S" || sigue=="s")



// registro de asistencias // no terminado


// Definir una función de orden superior para crear el registro de asistencias
function crearRegistro() {
    let asistencias = {};
  
    return function (alumno) {
      if (!asistencias[alumno]) {
        asistencias[alumno] = 1;
      } else {
        asistencias[alumno]++;
      }
  
      console.log(`Asistencia registrada para ${alumno}`);
      console.log(`Número total de asistencias para ${alumno}: ${asistencias[alumno]}`);
    };
  }
  
  // Crear el registro de asistencias
  const tomarAsistencia = crearRegistro();
  
  // Tomar asistencias para los alumnos usando prompt
  while (true) {
    const alumno = prompt('Ingresa el nombre del alumno (o presiona Cancelar para terminar):');
  
    if (alumno === null) {
      break; // Salir del bucle si se presiona Cancelar
    }
  
    tomarAsistencia(alumno);
  }
  