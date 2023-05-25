/*function contar(){
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
}*/

function contar(){
    //defininco variaveis 
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pass= document.querySelector('input#passo')
    let resultado = document.getElementById('res')



    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = 'Impossivel Contar'
    }else{
        resultado.innerHTML = `contando... <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0 ) {
            window.alert('Passo inválido! Conssiderando Passo valendo 1')
            p = 1
        }

    //condição feita dentro do "else" do primeiro "if"

    if(i < f){
        //Contagem progressiva
        for(let c = i; c <= f; c += p ){
            res.innerHTML += `${c} \u{1f449}`
        }
    }else{
        //contagem regressiva
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    }
      
    }
}