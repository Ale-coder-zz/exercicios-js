function criarProduto(nome, preco, desconto){
    return{
        nome,
        preco,
        desconto,
    }
}
console.log(criarProduto('Notebook','1515','10%'))
console.log(criarProduto('celular','405','08%'))
console.log(criarProduto('Airbook','54515','36%'))