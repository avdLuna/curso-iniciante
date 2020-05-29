//              0               1                   2           3           4
const filmes = ["parasita", "500 dias com ela", "lagoa azul", "toy story","star wars"]; // o circulo
console.log(filmes);
const assistirAgora = filmes[0];
console.log(assistirAgora);
console.log(filmes.length);

filmes.push("o circulo");
console.log(filmes);
filmes.splice(5,1);
console.log(filmes);

//filmes.push("jogos mortais");

//console.log(filmes);

module.exports = filmes;



