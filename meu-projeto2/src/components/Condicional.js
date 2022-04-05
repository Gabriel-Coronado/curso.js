import {useState} from 'react'

function Condicional(){

        function enviarEmail(e){
            e.preventDefault()
            setUserEmail(email)
            setUserPassword(password)
            console.log(UserEmail)
        }
        function limparEmail(){
            setUserEmail('')
            setUserPassword('')
        }

        const [email , setEmail]=useState()
        const [password, setPassword]=useState()
        const [UserEmail, setUserEmail]=useState()
        const [UserPassword, setUserPassword]=useState()


    
        return(
            <div>
                <h2>Cadastre o seu e-mail</h2>
                <form onSubmit={enviarEmail}>
                    <input type='e-mail' placeholder='Cadastre seu e-mail...' onChange={(e)=>setEmail(e.target.value)}/>
                    <br></br><br></br>
                    <input type='password' id='password' name='password' placeholder='Cadastre sua senha...' onChange={(e)=>setPassword(e.target.value)}/> 
                    <br></br>     <br></br>
                    <button type='submit' onClick={enviarEmail}>Cadastrar</button>              
                </form>
                {UserEmail||UserPassword && (
                    <div>
                        <p>Usuário {UserEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </div>
        )

}
export default Condicional