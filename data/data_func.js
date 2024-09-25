const habitaciones = require('./data')

let init_habitacion = 1

const getHabitacionActual = () => {
  return {
    habitacion: init_habitacion,
    acertijo: habitaciones[init_habitacion].acertijo
  }
}

const procesarComando = (comando) => {
  if (comando.toLowerCase() === "ver pista") {
    return { alerta: habitaciones[init_habitacion].pista };
  }

  if (comando.toLowerCase() === habitaciones[init_habitacion].respuesta) {
    if (init_habitacion < Object.keys(habitaciones).length) {
      init_habitacion++;
      return { alerta: "Respuesta correcta. Avanzaste a la siguiente habitación ^_^" }
    } else {
      return { alerta: "Felicidades!!! Has escapado de todas las habitaciones :D" }
    }
  } else {
    return { alerta: "Comando incorrecto o respuesta equivocada" }
  }
}

module.exports = {
  getHabitacionActual,
  procesarComando
}
