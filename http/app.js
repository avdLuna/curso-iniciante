//require

const filmes = require('./filmes');

console.log(filmes);

const filmes2 = require('../listas');

console.log(filmes2);


const http = require('http');

const host = '127.0.0.1';
const porta = '8080';

const server = http.createServer((req, res) => {
    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(filmes));
});

server.listen(porta, host, () => {
    console.log("Servidor ouvindo na porta " + porta);
})