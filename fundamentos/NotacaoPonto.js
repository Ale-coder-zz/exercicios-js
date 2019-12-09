console.log(Math.ceil(7.6))

const objt1 = {}
objt1.nome = 'bola'
console.log(objt1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Rock!!!!')
    }
}

const objt2 = new Obj('Cadeira')
const objt3 = new Obj('Mesa')

console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()
