function tratarErroELancar(erro){
    throw new Error ('Erro 404')
}

function imprimirNomeGritando(obj){
   try { 

    console.log(obj.name.toUpperCase() + '!!!')
 }  catch (e) {
           tratarErroELancar(e)
   } finally{
      console.log('Horse')
   }
}

const obj = { name: 'Horse'}
imprimirNomeGritando(obj)