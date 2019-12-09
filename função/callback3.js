// callback dentro do browser

document.getElementsByTagName('body') [0].onclick = (e) =>  { 
    console.log('O evento ocorreu!')
}      // arrow function ]


// funcao normal 
document.getElementsByTagName('body') [0].onclick= (e) => {
    console.log('O evento occoreu !2')
}