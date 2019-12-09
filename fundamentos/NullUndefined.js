/*const a = {name: 'teste'}
const b = a   
                       
b.name = 'Opa' 
                       igualando os endereços 
                        a/b tem a mesma referência do objeto
                        atribuição por referência 
 a = Opa  /*/

 let valor // não definida/inicializada
 console.log(valor) 

 valor = null // ausência de valor/ não direcionada a um obejto 
 console.log(valor)
 console.log(valor) // erro/ não da pra acessar variaveis nulas (Tostring)

 const produto = {}
 console.log(produto.preco)
 produto.preco = 3.89
 console.log(produto.preco)

 produto.preco = undefined  // evitar atribuir undefined 
 console.log(produto.preco)

 produto.preco = null // sem preço 
 console.log(produto.preco)
 console.log(produto)