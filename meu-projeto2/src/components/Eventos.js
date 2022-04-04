import Button from "./Evento/Button"

function Eventos(){

    function meuEvento(){
        console.log(`Ativando primeiro evento`)        
    }

    function segundoEvento(){
        console.log('Ativando segundo evento')
    }
     
    return(
        <>
        <p>Clique aqui:</p> 
        <Button event={meuEvento} text='Primeiro evento'/><br></br><br></br>
        <Button event={segundoEvento} text='Segundo evento'/>
        </>
    )
}

export default Eventos