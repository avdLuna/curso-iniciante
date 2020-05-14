const filmesAmanda = ["parasita", "500 dias com ela", "lagoa azul", "toy story","star wars"];
const filmesJoao = ["toy story","star wars"];
const filmesDaniel = ["star wars"];

function adicionaFime(filme, lista){
    lista.push(filme);
}

adicionaFime("carros",filmesJoao);

const x = 3;
const y = 4;

function soma(a,b){
    return a + b; // inteiro
}

const resultado = soma(x,y);

const somaArrow = (a,b) => {
    return a + b;
};

console.log(filmesJoao);
console.log(resultado);
console.log(somaArrow(x,y));





