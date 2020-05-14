const filmes = ["parasita", "500 dias com ela", "lagoa azul", "toy story","star wars","jogos mortais"];

const minhaIdade = 21;
const idadeIrmaoMaisNovo = 17;

// Se a idade da pessoa que for comprar o ingresso for > 18 -> pode comprar
// Senão, ela não pode

// Operadores lógicos
// >,<, ==, !=, <=, >=
const acompanhada = true;
// &&, ||

// Se for < 18 E estiver acompanhado pode comprar ingresso
if(idadeIrmaoMaisNovo > 18){ // false
    console.log("Pode comprar o ingresso");
} else if(idadeIrmaoMaisNovo < 18 && acompanhada == true){ 
    console.log("Pode comprar o ingresso");
} else {
    console.log("Não pode comprar o ingresso");
}
