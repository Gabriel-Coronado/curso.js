function contar() {
    let inicio = document.getElementById('in')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')
     if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
         window.alert('ERRO')
     } else {
         res.innerHTML = 'Contando: <br>'
         let start = Number (inicio.value)
         let end = Number (fim.value)
         let pass = Number (passo.value)
         if (pass <= 0) {
             window.alert('Passo inválido! Considerando PASSO 1')
             pass = 1
         }
            if (start < end) {
                 for (let c = start; c <= end; c += pass) {
             res.innerHTML += `${c} \u{1F595}`
             }
             }else {
                for (let c = start; c >= end; c -= pass){
                    res.innerHTML += `${c} \u{1F595}`
                }               
            }
         res.innerHTML += `\u{1F3C1}`
     }

}