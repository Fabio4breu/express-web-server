// IMPORTANDO EXPRESS
const express = require('express');
const app = express();

// ROTAS
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get("/fale_conosco", (req, res) => {
  res.sendFile(__dirname + '/views/fale_conosco.html');
});

app.get("/quem_somos", (req, res) => {
  res.sendFile(__dirname + '/views/quem_somos.html');
});

// Middleware para rota inexistente (404)
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/not_found_404.html');
});

// PORTA
const port = 3001;
app.listen(port, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${port}`);
});
