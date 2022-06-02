// Definir variables que voy a necesitar
let nombreCompleto;
let edad;
let municipioFront;
let sexo;
let embarazo = false;
let semanasEmbarazo = false;
// Segundo paso: Solicitar los datos
nombreCompleto = prompt("Escribe tu nombre completo");
edad = Number(prompt("Digita tu edad"));
if (edad >18){
    municipioFront = prompt(
        "¿Resides es un municipio fronterizo del norte del pais?"
      );
      sexo = (prompt('Elige tu sexo'));
      if (sexo == 'Mujer') {
          embarazo = (prompt('Indica si estás embarazada'));
          semanasEmbarazo = (prompt('Indica semanas de embarazo'));
      }
      
}   

// Tercer paso: Desarrollo de la lógica
if (edad >= 30) {
    resultado = "Eres mayor de edad, continua el proceso";
  } 

else if (edad >= 18) {
  if ((municipioFront = "Si")) {
    resultado = "Puedes vacunarte";
  }
}

else if (embarazo === 'Si' && semanasEmbarazo >9){
    resultado = 'Puedes vacunarte'
}

else {
  resultado = "No cumples con los requisitos para vacunarte. ";
}




// Cuarto paso: Entregar resultados
document.write(`Hola, ${nombreCompleto} tu ${resultado}`

    );
