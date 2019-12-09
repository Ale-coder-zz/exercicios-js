// funcao sem retorno 

function Soma (a, b){
    console.log(a + b)
}
Soma(10, 50)

//funcao com retorno 
function soma1(a, b=0) {
    return a + b
}
console.log(soma1(70,100))

console.log(soma1())