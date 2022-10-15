import { useEffect } from 'react'
import styles from './SolitarioGame.module.css'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { setCardDeckAction } from '../../redux/actions/setCardDeckAction'

const SolitarioGame = () => {

    const dispatch = useAppDispatch()
    const cards: any[] = useAppSelector(store => store.setCardDeckReducer)
    console.log(cards)

    // Load all cards
    useEffect(() => {
        dispatch(setCardDeckAction())
    },[])

    return (
        <div>
            {
                cards.map((card, index) => {
                    return (
                        <div key={index}>
                            {card.number}
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default SolitarioGame