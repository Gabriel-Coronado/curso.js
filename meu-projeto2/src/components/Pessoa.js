import styles from './Frase.module.css'

function Pessoa({nome,idade,profissao,foto}){

    return(
        <div className={styles.FraseContainer}>
            <img src = {foto} alt={nome}/> <br></br> <br></br>
            <h2 className={styles.FraseContent}>Nome:{nome}</h2>
            <p className={styles.FraseContent}>Idade:{idade}</p>
            <p className={styles.FraseContent}>Profissão:{profissao}</p>
        </div>
    )
}

export default Pessoa