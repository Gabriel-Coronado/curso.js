
function verificar() {
    var p = document.getElementById('pais')
    var ver = String (p.value)
    var res = document.getElementById('res')
    if (ver.Brasil) {
        res.innerHTML= '<p>Você é <strong>brasileiro!<strong><p>'
            p.style.background = 'green'
            p.style.color = 'yellow'
            res.style.background = 'green'
            res.style.color = 'yellow'
    }
    else if (ver == 'Argentina') {
        res.innerHTML='<p>Você é <strong>Argentino!<strong><p>'
            p.style.background = 'turquoise'
            p.style.color = 'white'
            res.style.background = 'turquoise'
            res.style.color = 'white'
    }
    else if (ver == 'EUA'){
        res.innerHTML = '<p>Você é <strong>Americano<strong><p>'
            p.style.background = 'blue'
            p.style.color = 'white'
            res.style.background = 'tomato'
            res.style.color = 'white'
   }
} 