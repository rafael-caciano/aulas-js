
function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    

    if(fano.value.length == 0 || fano.value > ano){
         window.alert('[ERRO] Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = "Homem"
            if(idade >= 0 && idade < 10 ){
                img.setAttribute('src', 'foto-crianca-h.png')
            }else if(idade < 30){
                img.setAttribute('src', 'foto-jovem-h.png')
            }else if(idade < 60){
                img.setAttribute('src', 'foto-adulto-h.png')
            }else{
                img.setAttribute('src', 'foto-idoso-h.png')
            }
           
        } else if(fsex[1].checked){
            gênero = "Mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-crianca-m.png')
            }else if(idade < 30){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 60){
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Você é ${gênero} e tem ${idade} anos`
        res.appendChild(img)

    }

}


