function calcular(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#d4bc83'
        
    }else if(hora <= 18){
        //boa tarde   
        img.src = 'foto-tarde.png'
        document.body.style.background = '#d97747'
    }else{
        //boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#473335'
    }
}