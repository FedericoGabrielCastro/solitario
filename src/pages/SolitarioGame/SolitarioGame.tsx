import { useEffect } from 'react'
import styles from './SolitarioGame.module.css'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { setCardDeckAction } from '../../redux/actions/setCardDeckAction'
import DeckStack from '../../components/deckStack/deckStack'
import CardStack from '../../components/cardStack/cardStack'
import RowCardsStack from '../../components/rowCardsStack/rowCardsStack'

const SolitarioGame = () => {

    const dispatch = useAppDispatch()
    const cards = useAppSelector(store => store.setCardDeckReducer)
    
    console.log("esto ", cards)

    // Load all cards
    useEffect(() => {
        // dispatch(setCardDeckAction())
    },[])

    return (
        <div className={styles.lonelyGame}>
            <div className={styles.deckStacks}>
                <DeckStack />
                <CardStack />
            </div>
            <div className={styles.stacks}>
                <RowCardsStack />
            </div>   
        </div>
    )
}

export default SolitarioGame