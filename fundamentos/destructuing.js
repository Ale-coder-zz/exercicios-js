const pessoa = {
  nome: 'Ale',
  idade: 15 ,
  endereço: {
      logradouro: 'Rua mec',
      numero: 100
  }
}

const { nome, idade, endereço } = pessoa
console.log(nome, idade)

const {  nome: n, idade: i } = pessoa 
console.log(i,n)

const {endereço: {  logradouro, numero }} = pessoa 
console.log(logradouro, numero)