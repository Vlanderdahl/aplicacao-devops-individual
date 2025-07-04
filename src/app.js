const express = require('express');
const path = require('path'); // Módulo 'path' para lidar com caminhos de arquivos
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint para a raiz '/' que retorna o 'index.html'
app.get('/', (req, res) => {
    // Usa path.join para construir o caminho correto para o arquivo,
    // garantindo compatibilidade com Windows e Linux/macOS.
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});