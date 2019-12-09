// Função em Js é First-Class Obejct (Citizens)
// Higher-order function 

//criar de fomra literal
function fun1() { }

//Armazenar em uma váriavel 
const fun2 = function() { }

//Armazenar em um Array 
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,7))

//Armazenar em um atributo de obj
const obj = {}
obj.falar = function () {return'Opa'}
console.log(obj.falar())

//Passar função como parametro 
function run(fun) {
    fun()
}
run(function () {console.log('Executando..')} )

//Uma funcção pode retornar/ conter uma função 
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(4, 5)(10)
