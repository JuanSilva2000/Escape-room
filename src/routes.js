const express = require('express')
const router = express.Router()
const data_funcs = require('../data/data_func')

router.get('/habitacion', (req, res) => {
  const roomData = data_funcs.getHabitacionActual();
  res.json(roomData);
})

router.post('/habitacion/comando', (req, res) => {
  const { comando } = req.body
  const response = data_funcs.procesarComando(comando)
  res.json(response)
})

module.exports = router;