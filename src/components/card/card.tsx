import { FunctionComponent } from 'react'
import styles from './card.module.css'

interface Params {
    image: string
}

const Card: FunctionComponent<Params> = ({image}) => {
    return <img src={`cards/${image}`} alt={image} className={styles.card}/>
}

export default Card