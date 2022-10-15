import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'
import styles from './cardStack.module.css'

const CardStack = () => {
    return (
        <div className={styles.cardStack}>
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
        </div>
    )
}

export default CardStack