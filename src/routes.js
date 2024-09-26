const express = require('express')
const router = express.Router()
const data_funcs = require('../data/data_func')
const client = require('prom-client');


const habitacionCounter = new client.Counter({
  name: 'habitacion_access_count',
  help: 'Cantidad de veces que los usuarios acceden a una habitación'
});


router.get('/habitacion', (req, res) => {
  const roomData = data_funcs.getHabitacionActual();
  habitacionCounter.inc();	
  res.json(roomData);
})

router.post('/habitacion/comando', (req, res) => {
  const { comando } = req.body
  const response = data_funcs.procesarComando(comando)
  res.json(response)
})

module.exports = router;
