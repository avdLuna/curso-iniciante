let listaFilmes = require("./filmes");
const db = require('./db');
const controller = require("./FilmesController");

const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());

const port = 8080;

server.listen(port, () => {
   console.log("Servidor rodando na porta " + port);
});

server.get('/ping', (req, res) => {
    res.status(200).send({
        pong: "true"
    })
})

server.get('/filmes', (req, res) => {
   const lista = controller.list(req,res);
   res.status(200).send({
       filmes:lista
   });
});



server.post('/filmes', (req,res) => {
    if(!req.body.nome){
        res.status(400).send("O filme precisa de um nome");
    } else {
        const filme = {
            "id": listaFilmes.length + 1,
            "nome": req.body.nome 
        }
        const constResponse = controller.create(req,res);
        res.status(200).send(constResponse);
    }
});
// 1 parametro -> rota
// 2 parametro -> instrucoes com req e res
server.delete('/filmes', (req, res) => {
    const id = req.body.id - 1;
    listaFilmes.splice(id,1);
    res.status(200).send("Filme removido");
})



