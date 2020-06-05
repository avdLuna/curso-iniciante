const db = require('./db');
const controller = require("./FilmesController");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const server = express();

server.use(cors());

server.use(bodyParser.json());

const port = 8080;

server.listen(port, () => {
   console.log("Servidor rodando na porta " + port);
});

server.get('/ping', (req, res) => {
    res.status(200).send({
        pong: "true"
    });
})

server.get('/filmes', (req, res) => {
   controller.list(req,res).then((lista) => {
       res.status(200).send({
           filmes:lista
       });
   });
});

server.post('/filmes', (req, res) => {
    if(!req.body.nome){
        res.status(400).send("O filme precisa de um nome");
    } else {
        const response = controller.create(req,res);
        res.status(200).send(response);
    }
});

server.delete('/filmes', (req, res) => {
    controller.delete(req,res).then(() => {
        res.status(200).send("Filme removido");
    });
});



