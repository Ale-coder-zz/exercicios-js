// notacao literal 
const obj1 = {} 
console.log(obj1)

// Object em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funçoes construtoras 
function produto(nome, preco, desconto  ){
this.nome =  nome
this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
}
}

const p1 = new produto('caneta', 10, 01)
const p2 = new produto('Notebook', 100, 010)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// function factory
function criarFuncionario(nome,salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return( salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7000, 5)
const f2 = criarFuncionario('Maria', 1000, 10)

console.log(f1.getSalario(), f2.getSalario())


// Object.creat 
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// Retornando Json para Objeto 
const fromJSON = JSON.parse('{"info": "SOU JSON"}')
console.log(fromJSON)