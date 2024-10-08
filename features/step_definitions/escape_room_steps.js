const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const data_funcs = require('../../data/data_func');

let respuesta;
let habitacionActual;

// Escenario: Recibir Pista
Given('que el jugador esta resolviendo un acertijo', () => {
  return
})

When('el jugador ingresa {string}', (comando) => {
    if(comando === "ver pista"){
        this.respuesta = data_funcs.procesarComando(comando)
    }
})

Then('el sistema debe responder con una pista', () => {
  const pistaEsperada = "Es una fruta"; 
  assert.strictEqual(this.respuesta.alerta,pistaEsperada)
})

// Escenario: Mostrar acertijo
Given('que el jugador está en una habitación', () => {
  return
})

When('carga la pagina o avanza a otra habitacion', () => {
  habitacionActual = data_funcs.getHabitacionActual(); // Simula la carga o avance
})

Then('debe mostrar el acertijo', () => {
  const acertijoEsperado = "Soy blanco por dentro y verde por fuera ¿Qué soy?";
  assert.strictEqual(habitacionActual.acertijo, acertijoEsperado);
})

// Escenario: Digitar respuesta
Given('que el jugador lee el acertijo de la primera habitacion', () => {
  return
})

When('digite su respuesta', () => {
  respuesta = data_funcs.procesarComando("askjfnakj");
})

Then('el juego debe procesar su respuesta para mostrar un alert correspondiente', () => {
  const alertaEsperada = respuesta.alerta
  assert.ok(alertaEsperada.includes("Respuesta correcta") || alertaEsperada.includes("Comando incorrecto"))
})

// Escenario: Respuesta correcta de acertijo
Given('que el jugador ha respondido correctamente', () => {
  return
})

When('la respuesta es procesada', () => {
  respuesta = data_funcs.procesarComando("pera") 
})

Then('el jugador recibe una notificacion y avanza de habitacion', () => {
  const alertaEsperada = "Respuesta correcta. Avanzaste a la siguiente habitación ^_^";
  assert.strictEqual(respuesta.alerta, alertaEsperada);
})
  
// Esceneario: Juego completado
Given('que el jugador ha resuelto todos los acertijos', () => {
  data_funcs.marcarCompletadoAcertijos()
})

When('se procesa la ultima respuesta correcta', () => {
  // Simulamos que el jugador ingresa la última respuesta correcta
  respuesta = data_funcs.procesarComando("promesa");
});

Then('el sistema debe mostrar un mensaje de felicitaciones', () => {
  const mensajeEsperado = "Felicidades!!! Has escapado de todas las habitaciones :D"
  assert.strictEqual(respuesta.alerta, mensajeEsperado);
});