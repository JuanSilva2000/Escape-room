const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const client= require('prom-client');
const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', routes);

// Ruta para exponer las métricas de Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});


const port = 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
