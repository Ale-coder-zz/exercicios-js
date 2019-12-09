// pessoa -> 123 -> {...}
const pessoa = { nome: 'joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome 'Ana'}

Object.freeze(pessoa) // a partir dessa linha o obj fica constante impossivel ser alterado

pessoa.nome = "Maria"
console.log(pessoa.nome)
delete pessoa.nome

const pessoaConstante = Object.freeze({nome:'Jogao'})
console.log(pessoaConstante)