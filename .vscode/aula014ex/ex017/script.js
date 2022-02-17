function multiplicar() {
    var num = document.getElementById('mult')
    var tab = document.getElementById('seltab')
    var m = 1
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('ERRO')
        
    }   else {
        tab.innerHTML = ''
        while (m <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${m} = ${n*m}`
            item.value=`tab${m}`
            tab.appendChild(item)
            m++
        }
        }
    }