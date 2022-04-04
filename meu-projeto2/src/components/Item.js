import styles from './Frase.module.css'
import PropTypes from 'prop-types'

function Item({marca, modelo, ano_lancamento}){

    return(
        <>
          <li className={styles.FraseContent}>
              {marca}-{ano_lancamento} <br></br>
              {modelo}
          </li>

        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento:PropTypes.number.isRequired,
    modelo: PropTypes.string.isRequired 
}
Item.defaultProps = {
    marca: 'Faltou Marca',
    ano_lancamento:0,
    modelo:'Faltou Modelo'

}

export default Item