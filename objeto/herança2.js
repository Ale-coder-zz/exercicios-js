//Cadeia de protótipos (prototype)
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2:'B'}
const filho = {__proto__:pai, attr3:'C'}
console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr2)


const carro = {
    velAtual:0,
    VelMax:200,
    acelararMais(delta){
        if(this.velAtual+ delta <= this.VelMax){
            this.velAtual += delta
        } else{
            this.velAtua= this.VelMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.VelMax}km/h`
    }
}