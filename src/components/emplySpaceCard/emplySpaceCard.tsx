import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
import styles from './emplySpaceCard.module.css'

const EmplySpaceCard = ({children} : any) => {
    return <div className={styles.emplyCard} >{children} </div>
}

export default EmplySpaceCard