import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar(){
    return(
        <ul className={styles.list}>
      <li className={styles.item}><Link to='/'>Home</Link></li><br></br><br></br>
      <li className={styles.item}><Link to='/empresa'>Empresa</Link></li><br></br><br></br>
      <li className={styles.item}><Link to='/contato'>Contato</Link></li><br></br><br></br>
    </ul>
    )
}

export default Navbar