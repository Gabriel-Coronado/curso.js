var num = document.getElementById('txtn')
var lista = document.getElementById('listid')
var res = document.getElementById('res')
var valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }
}
function inLista(n, l ) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value=''
    num.focus()
}
function finalizar(){
        if ( valores.length > 0 ){
            valores.sort()
            var menor = valores[0]
            var maior = valores[0]
            var soma = 0
            var media = 0
            for(let pos in valores){
                soma += valores[pos]
                media = soma/valores.length
                if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
            res.innerHTML= ''
            res.innerHTML+= `Temos ${valores.length} números adicionados`
            res.innerHTML+= `<p>O menor valor é ${menor}</p>`
            res.innerHTML+= `<P>O maior valor é ${maior}</p>`
            res.innerHTML+=`<p>A soma dos valores é ${soma}</p>`
            res.innerHTML+=`<p>A média é ${media}</p>`
        }
    } else {
            window.alert('Adicione um número')
        }
        
        num.focus()
    }