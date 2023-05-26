//primeiro temos que criar um alerta para caso o campo nao seja preenchido
//depois fazer com que o valor digitado na caixa, se torne um valor dentro de um array
//precisamos criar uma tag option e incerir os valores do vetor nela

//a segunda fazer é criar a validação para caso nao tenha valores adicionados
//caso tenha mostrar quantos elementos temos usando o .length
//qual é o maior e o menor numero, ordenando eles com o .sort e mostrando o primeiro e o ultimo valor
//somar todos os valores e depois dividilos pelo numero de elementos
    

let num = window.document.getElementById('fnum')
    let lista = document.getElementById('flista')
    let res = document.getElementById('res')
    let valores = []


function adicionar(){
    
    if(num.value.length == 0 ){
        window.alert('Preencha o campo')
    }else if( num.value < 1 || num.value > 100){
        window.alert('Numero inválido')
    }else{

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `Valor ${num.value} foi cadastrado`
        lista.appendChild(item)
    }
}

function finalizar(){
  
       if(valores.indexOf() != -1){ 
        window.alert('Não existem valores cadastrados')
    }else{
        window.alert('ok ok ok')
    }
   
}