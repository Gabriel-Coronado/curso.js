function verificar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getUTCMinutes()
    var seg = data.getSeconds()
    var br = document.getElementById('br')
    var pt = document.getElementById('pt')
    var jp = document.getElementById('jp')
    var eua = document.getElementById('eua')
    var ch = document.getElementById('ch')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    var tit = document.getElementById('titulo')
    var saud = document.getElementById('saudacao')
    var rp = document.getElementsByName('radp')
        if (rp[0].checked) { 
        res.innerHTML = `Agora são ${hora}:${min}:${seg} horas!`
        img.src = 'brasil.png'
    } if (hora >= 0 && hora <=12){
        document.body.style.background = '#e2cd9f'
        tit.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        document.body.style.background = '#b9846f'
        saud.innerHTML = 'Boa tarde!'
    } else {
        document.body.style.background = '#515154'
        tit.innerHTML = 'Boa noite!'
        }  if (rp[1].checked){
            img.src = 'portugal.png'
        var p = hora + 4 
        if (p >= 24){
            hora = p -24
        res.innerHTML = `Agora são ${hora}:${min}:${seg}  horas!`
        }
        else {
            res.innerHTML = `Agora são ${p}:${min}:${seg}  horas!`
        } if (hora >= 0 && hora <=12){
            document.body.style.background = '#e2cd9f'
            tit.innerHTML = 'Bom dia!'
        } else if (p >= 12 && p <= 18){
            document.body.style.background = '#b9846f'
            tit.innerHTML = 'Boa tarde!'
        } else {
            document.body.style.background = '#515154'
            tit.innerHTML = 'Boa noite!'
        }
    } else if (rp[2].checked){
        img.src = 'japao,png.png'
        var j = hora + 12
        if (j >= 24){
            hora = j-24
        res.innerHTML = `Agora são ${hora}:${min}:${seg}  horas!`
        }
        else {
            res.innerHTML = `Agora são ${hora}:${min}:${seg}  horas!`
    }     if (hora >= 0 && hora <=12){
        document.body.style.background = '#e2cd9f'
        tit.innerHTML = 'Bom dia!'
    } else if (j >= 12 && j<= 18){
        document.body.style.background = '#b9846f'
        tit.innerHTML = 'Boa tarde!'
    } else {
        document.body.style.background = '#515154'
        tit.innerHTML = 'Boa noite!'
    }
        } else if (rp[3].checked){
            img.src = 'eua.png'
        var e = hora - 1
        hora = e - 24
        if (e >= 24){
        res.innerHTML = `Agora são ${hora}:${min}:${seg}  horas!`
        } else {
            res.innerHTML = `Agora são ${e}:${min}:${seg}  horas!`
    }    if (hora >= 0 && hora <=12){
        document.body.style.background = '#e2cd9f'
        tit.innerHTML = 'Bom dia!'
    } else if (e >= 12 && e<= 18){
        document.body.style.background = '#b9846f'
        tit.innerHTML = 'Boa tarde!'
    } else {
        document.body.style.background = '#515154'
        tit.innerHTML = 'Boa noite!'
    }
        } else if (rp[4].checked){
            img.src = 'china.png'
        var c = hora + 11
        hora = c - 24
        if (c >= 24){
        res.innerHTML = `Agora são ${hora}:${min}:${seg}  horas!`
         } else {
            res.innerHTML = `Agora são ${c}:${min}:${seg}  horas!`
        } if (hora >= 0 && hora <=12){
            document.body.style.background = '#e2cd9f'
            tit.innerHTML = 'Bom dia!'
        } else if (c >= 12 && c<= 18){
            document.body.style.background = '#b9846f'
            tit.innerHTML = 'Boa tarde!'
        } else {
            document.body.style.background = '#515154'
            tit.innerHTML = 'Boa noite!'
        }
        }
    }

