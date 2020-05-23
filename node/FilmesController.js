const Filme = require('./filmes');

exports.create = (req,res) => {
    const novoFilme = new Filme(req.body);
    novoFilme.save();

    return {
        filme: novoFilme
    }
}

exports.list = (req, res) => {
    const listaFilmes = Filme.find({}, (err) => {}).exec();

    return listaFilmes;
}

exports.delete = (req,res) => {
    const result = Filme.deleteOne({_id: req.body.id}, (err) => {}).exec();

    return result;
}




