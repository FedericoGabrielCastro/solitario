import { FunctionComponent } from 'react'
import styles from './cardFFlip.module.css'

const CardFlip: FunctionComponent = () => {
    return <img src="cards/card-back.png" alt="flip" className={styles.card}/>
}

export default CardFlip