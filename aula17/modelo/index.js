//primeiro temos que criar um alerta para caso o campo nao seja preenchido
//depois fazer com que o valor digitado na caixa, se torne um valor dentro de um array
//precisamos criar uma tag option e incerir os valores do vetor nela

//a segunda fazer é criar a validação para caso nao tenha valores adicionados
//caso tenha mostrar quantos elementos temos usando o .length
//qual é o maior e o menor numero, ordenando eles com o .sort e mostrando o primeiro e o ultimo valor
//somar todos os valores e depois dividilos pelo numero de elementos

function adicionar(){
    let num = window.document.getElementById('txtn')
    
    if(num.value.length == 0){
        window.alert('Preencha o campo')
    }else{
        let n = Number(num.value)
        
    }


}