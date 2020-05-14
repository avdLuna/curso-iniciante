//                  0           1                   2           3           4
const filmes = ["parasita", "500 dias com ela", "lagoa azul", "toy story","star wars"]; // o circulo

filmes.push("Jogos Mortais");
// console.log(filmes);

/*
- parasita
- 500 dias com ela
*/
// Passear sobre os indices da minha lista e executar algum código
/*
for(let i = 0; i < filmes.length; i++ ){
    if(i != 2){
        console.log("- " + filmes[i]);
    }
}
*/
let j = 0
while(j < filmes.length && filmes[j] != "lagoa azul"){
    console.log("* " + filmes[j]);
    j++;  
}


