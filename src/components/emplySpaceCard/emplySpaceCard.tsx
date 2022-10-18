import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, MouseEventHandler } from 'react'
import styles from './emplySpaceCard.module.css'

const EmplySpaceCard = ({children} : any, onClick: MouseEventHandler<HTMLDivElement> | undefined) => {
    return <div className={styles.emplyCard} onClick={onClick}>{children} </div>
}

export default EmplySpaceCard