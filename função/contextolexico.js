const valor = 'Global'

minhaFuncao = () => {
    console.log(valor)
}

function excec() {
    const valor ='local'
    minhaFuncao()
}
excec()