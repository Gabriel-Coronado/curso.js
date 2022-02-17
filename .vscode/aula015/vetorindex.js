let num = [0, 2, 1, 9, 5, 1, 7]
num.sort()
console.log(num)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('ERRO')
} else {
    console.log(`A posição é ${pos}`)
}