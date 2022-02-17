let amigo= {nome: 'José', 
sexo:'M', 
peso: 85.4,
engordar(p=0){
    if (p>0){
        console.log('Engordou')
    }
       else if (p==0){
            console.log('Manteve')
        }

    else {
        console.log('Emagreceu')

    }
    this.peso += p
}}
amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
