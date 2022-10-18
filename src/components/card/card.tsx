import { FunctionComponent } from 'react'
import styles from './card.module.css'

interface Params {
    image: string
    onClick: any
}

const Card: FunctionComponent<Params> = ({image, onClick}) => {
    return <img src={`cards/${image}`} alt={image} className={styles.card} onClick={onClick}/>
}

export default Card