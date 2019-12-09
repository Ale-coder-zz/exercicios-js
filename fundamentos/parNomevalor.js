// par nome/valor 
const saudacao = 'Opaa' // contexto léxico 1 

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2 
    return saudacao 
}

// Objetos são grupos aninhados  de pares nome/valor 
const Cliente = {
 nome: 'playcerbr',
 idade: 20,
 peso: 75,
 endereco: {
     logradouro : 'Rua meczada',
     numero: 123
    } 


}

console.log(saudacao)
console.log(exec())
console.log(Cliente)