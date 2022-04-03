import styles from './Frase.module.css'

function SayMyName({nome}){
    
    return(
        <div>
            <p className= {styles.FraseContent}>Fala aí {nome}</p>
        </div>
            )

}

export default SayMyName