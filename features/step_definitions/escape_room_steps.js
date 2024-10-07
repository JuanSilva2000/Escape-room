const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const data_funcs = require('../../data/data_func');

let respuesta

Given('que el jugador esta resolviendo un acertijo', () => {
  return
});

When('el jugador ingresa {string}', (comando) => {
    if(comando === "ver pista"){
        this.respuesta = data_funcs.procesarComando(comando)
    }
});

Then('el sistema debe responder con una pista', () => {
  const pistaEsperada = "Es una fruta"; 
  assert.strictEqual(this.respuesta.alerta,pistaEsperada)
});
