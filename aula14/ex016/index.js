function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pass= document.querySelector('input#passo')
    var resultado = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)


    
    while(i <= f){
    
        res.innerHTML += `${i}`
        i+=p
    }
    
    

    
}