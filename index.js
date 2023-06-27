const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('A Hosting está online!')
});

app.listen(3000, () => {
  console.log('Servidor iniciado!');
});