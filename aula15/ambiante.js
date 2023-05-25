let num = [2, 3, 5, 4, 7,]
num.push(1)
num.sort()

console.log (num)
console.log (`Vetor tem ${num.length} posições`)
console.log (`O primeiro valor do Vetor é ${num[0]}`)

let pos = num.indexOf(7)
if(pos == -1){
    console.log('Esse valor nao existe nesse vetor')
}else{
    console.log(`O valor escolhido está na posição ${pos}`)
}
