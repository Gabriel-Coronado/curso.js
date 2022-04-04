import Item from './Item'
import styles from './Frase.module.css'

function List(){

    return(
        <>
        <h1 className={styles.FraseContainer}>Lista Automotiva</h1>
        <ul className={styles.FraseContainer}>
            <Item marca='Ferrari' ano_lancamento={2012} modelo='F350'/><br></br>
            <Item marca='Mercedez'ano_lancamento={2009} modelo='AMG'/><br></br>
            <Item marca='Paganni'ano_lancamento={2015} modelo={'Zonda'}/><br></br>
            <Item marca='Lamborghini'ano_lancamento={2017} modelo={'Huracán'}/><br></br>
            <Item/>
        </ul>
        </>
    )
}
export default List