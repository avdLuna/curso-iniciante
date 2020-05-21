const Filme = require("./filmes");

exports.create = (req,res) => {
    const newMovie = new Filme(req.body);
    console.log(req.body);   
    newMovie.save((err) => {
        if(err){
            console.log("Error to save into db");
        } else {
            return {
                movie: newMovie
            };
        }
    });
}

exports.list = (req,res) => {
    Filme.find({}).exec((err, filmes) => {
        if(err){
             return err;
        } else {
            return {
                filmes: filmes
            };
        }
    });
}
