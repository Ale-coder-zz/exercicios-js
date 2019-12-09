//Armazenando uma funcao em uma variavel 
const soma = function (a, b) {
    console.log(a+b)
}
soma(470, 10)

//Armazenando uma funcao arrow em uma variavel 
const soma1 = (a, b) => {
    return a + b 
}
console.log(soma(10,40)) 

// retorno implicito 
const soma3 = (a, b) => a - b 
console.log(soma3(10, 50))

const soma4 = a => console.log(a)
soma4 ('jssssssssssssssss')