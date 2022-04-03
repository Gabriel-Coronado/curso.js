import Item from './Item'
import styles from './Frase.module.css'

function List(){

    return(
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca='Ferrari'/>
            <Item marca='Mercedez'/>
            <Item marca='Paganni'/>
            <Item marca='Lamborghini'/>
        </ul>
        </>
    )
}
export default List