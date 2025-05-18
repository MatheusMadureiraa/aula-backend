const http = require('http');
const fs = require('fs');
const path = require('path');
const Usuarios = require('./usuarios.js');

const usuarios = new Usuarios(path.join(__dirname, 'users.txt'));

const server = http.createServer((req, res) => {
    console.log('Requisição recebida:', req.url);

    if (req.url === '/' || req.url === '/pt') {
        return serveFile('pt.html', 'text/html', res);
    }
    
    if (req.url === '/en') {
        return serveFile('en.html', 'text/html', res);
    }

    if (req.url === '/users') {
        const users = usuarios.getTopUsuarios();
        const html = `
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="./style.css">
            <title>Top Users</title>
        </head>
        <body>
            <h1>Top 5 Usuários</h1>
            <ul>
                ${users.map(u => `<li>${u}</li>`).join('')}
            </ul>
            <a href="/">Voltar (PT)</a> | <a href="./en.html">Switch to English</a>
        </body>
        </html>`;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(html);
    }

    if (req.url.endsWith('.css')) {
        return serveFile(req.url.slice(1), 'text/css', res); // remove a '/' do início
    }

    if (req.url.endsWith('.html')) {
        return serveFile(`.${req.url}`, 'text/html', res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
});

function serveFile(relativePath, contentType, res) {
    const filePath = path.join(__dirname, relativePath);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Erro ao carregar ${filePath}:`, err);
            res.writeHead(500);
            return res.end('Erro ao carregar o arquivo');
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}

server.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
