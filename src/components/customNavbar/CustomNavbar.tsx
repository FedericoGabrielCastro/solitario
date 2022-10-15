import ButtonStartGame from '../buttonStartGame/buttonStartGame'
import styles from './CustomNavbar.module.css'

const CustomNavbar = () => {

    return (
        <div className={styles.navbar}>
            <ButtonStartGame />
        </div>
    )
}

export default CustomNavbar