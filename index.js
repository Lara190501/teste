const express = require("express"); // importa o módulo express
const app = express(); // inicia o express


// Rota inicial
app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo ao meu site!</h1>");
});

// Rota de listagem de produtos (agora respondendo em HTML)
app.get("/produtos", (req, res) => {
    res.send(`
        <h1>Lista de Produtos!</h1>
        <ul>
            <li>Produto 1</li>
            <li>Produto 2</li>
        </ul>
    `);
 
});

// Rota de consulta com parâmetro (respondendo em HTML também)
app.get("/consulta/:parametro", (req, res) => {
    const parametroRecebido = req.params.parametro;

    const html = `
        <h1>Resultado da Consulta</h1>
        <p>Você pesquisou por: <strong>${parametroRecebido}</strong></p>
    `;

    res.send(html);
});

// Middleware de tratamento de erro genérico
app.use((err, req, res, next) => {
    console.error("Erro capturado:", err.stack);
    res.status(500).send("Algo deu errado no servidor.");
});

// Inicialização do servidor
app.listen(process.env.PORT ?? 3000, (erro) => {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor iniciado.");
    }
});