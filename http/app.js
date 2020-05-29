//require

const filmes = require('./filmes');

console.log(filmes);

const http = require('http');

const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    // status
    res.statusCode = 200;
    // header
    res.setHeader('Content-Type', 'application/json');
    // conteúdo
    res.end(JSON.stringify(filmes));
});

server.listen(port, host, () => {
  console.log("Servidor rodando na porta " + port);
});

