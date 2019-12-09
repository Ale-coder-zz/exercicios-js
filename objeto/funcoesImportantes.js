const pessoa = {
    nome:"Rebeca",
    idade :2,
    peso1:3
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable:false,
    value:100000
})

pessoa.dataNascimento = '100'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = { a:1}
const um = { b: 2}
const dois = {c: 3, a: 4}
const obj = Object.assign(dest, um, dois)

Object.freeze(obj)
obj.c= 123 
console.log(obj)