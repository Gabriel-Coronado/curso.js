let valores = [4, 3, 1, 2, 8, 9, 5, 0, 6]
valores.sort()
valores.push(12)
console.log(valores)
console.log(valores.length)
/*
for ( let pos = 0 ; pos < valores.length; pos++){
    console.log(`A poisção ${pos} tem o valor ${valores[pos]}`)
}*/
for ( let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}