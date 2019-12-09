let a = 3 

global.b = 123
this.c = 456  

console.log(a)
console.log(global.b)
console.log(this.c)

this.e = 321
this.f = 654    
this.g = 789

console.log(module.exports)
console.log(module.exports === this)