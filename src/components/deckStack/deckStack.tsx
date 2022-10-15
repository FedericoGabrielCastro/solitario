import styles from './deckStack.module.css'
import { useAppSelector } from '../../hooks/reduxHooks'
import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'


const DeckStack = () => {

    const deckCards = useAppSelector(store => store.setCardDeckReducer)

    return (
        <div className={styles.deckCard}>
            <EmplySpaceCard />
            <EmplySpaceCard />
        </div>
    )
}

export default DeckStack