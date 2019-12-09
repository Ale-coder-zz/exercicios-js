// coleção dinámica de pares /chae/valor

const produto = new Object 
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220 

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor:8000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro: 'ABC123',
            numero:123
        }

    },
    condutores:[{
        nome:'Juniro',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 45
    }]
}
carro.proprietario.endereco.numero = 44844
console.log(carro)
delete carro.condutores
console.log(carro)