//Closures é o escopo de criação quando uma função é declarada 
// Esse escopo permite a função acessar e manipular variáveis exeternas á função 

// contexto lexico em ação 


const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro() {
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())