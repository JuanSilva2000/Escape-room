const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', routes);

const port = 3000
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
