/*
v e v -> v 
v e f -> f       Operadoes Logicos I 
f e ? -> f


v ou ? -> v 
f ou v -> v    Operadoes Logicos Ou 
f ou f -> f 
 
v xor v -> f 
v xor f -> v   Operadores Logicos Ou Exclusivo 
f xor v -> v 
f xor f -> f

!v -> f 
!f -> v          negacao logica 
*/ 


function compra(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTv50  = trabalho1 && trabalho2
 //   const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor/ bit a bit 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}
console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))