function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0


    //metodopublico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico 2 
    this.getvelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()

console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(250, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.getvelocidadeAtual()
console.log(ferrari.getvelocidadeAtual())