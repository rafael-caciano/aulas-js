let val = [2, 4, 6, 3, 7]

//console.log (val)

/*console.log(val[0])
console.log(val[1])*/

/*val.sort()

for(let pos=0; pos < val.length; pos++){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
} */

val.sort()
for(let pos in val){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}