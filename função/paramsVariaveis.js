function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]

    }
    return soma 

}

console.log(soma(1))
console.log(soma(2,5,7,6))
console.log(soma('Teste variavel'))