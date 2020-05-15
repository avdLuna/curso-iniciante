const ehImpar = (numero) => numero % 2 != 0;

const calculaSoma = (comeco,fim) => {
    let soma = 0;
    for (let i = ++comeco ; i < fim; i++) {
        if(ehImpar(i)){
            soma += i;
        }
    }
    return soma;
}

function impares (x,y){
    let result;
    if(x > y){
        result  = calculaSoma(y,x);
    } else {
        result =  calculaSoma(x,y);
    }
    return result;
}

console.log(impares(12,12));
