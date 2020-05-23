const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Iniciar um novo esquema / Novo modelo de objeto

const Filme =  new Schema({
    nome : {type:String}
});
// modelo de objeto(documento) do banco
module.exports = mongoose.model("Filme",Filme);


