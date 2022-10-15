import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'
import styles from './rowCardsStack.module.css'

const RowCardsStack = () => {
    return (
        <div className={styles.rowCardStack}>
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
            <EmplySpaceCard />
        </div>
    )
}

export default RowCardsStack