//neste caso os dois valores são digitados
function soma(n1, n2){
    return n1 + n2
}
console.log(soma(7, 7))

//mas caso um numero nao seja digitado dará o seguinte erro NaN
function suma(n3, n4){
    return n3 + n4
}
 console.log(suma(7))

// para resolver esse problema atribuimos uma função  '='
//para sinalizar que caso nao tenha numero será representado
//pelo numero que deixaremos pre estabelecido
function sama(n5=0, n6=0){
    return n5 + n6
}
console.log(sama(7))
