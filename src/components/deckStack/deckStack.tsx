import { useState } from 'react'
import styles from './deckStack.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'
import Card from '../card/card'
import CardFlip from '../cardFlip/cardFlip'
import { useEffect } from 'react'
import { addCardToReusableAction, restartDeckAction } from '../../redux/actions/setLastCardAction'
import { VscDebugRestart } from 'react-icons/vsc'

interface card {
    number: number
    type: string
    color: string
    img: string
}

const DeckStack = () => {
    
    const dispatch = useAppDispatch()
    
    const deckCards: [] | any = useAppSelector(store => store.setCardDeckReducer)
    const arraysDeck: any | card[]  = useAppSelector(store => store.setLastCardReducer)
    
    const [shuffleDeck, setShuffleDeck] = useState([])
    const [reusableDeck, setReusableDeck] = useState([])    
    
    const handleCLickDeckCard = (deck: card) => {
        setShuffleDeck(shuffleDeck.filter((item: any) => item !== deck))
        
        dispatch(addCardToReusableAction(deck))
    }
    
    const handleRestartDeck =() => {
        if (shuffleDeck.length === 0 ) { setShuffleDeck(arraysDeck.deck)}
        dispatch(restartDeckAction())
        setReusableDeck(reusableDeck)
    }
    
    useEffect(() => {
        setReusableDeck(arraysDeck?.reusable)
        setShuffleDeck(deckCards?.shuffleDeck)
    },[deckCards])
    
    console.log(shuffleDeck)

    return (
        <div className={styles.deckCard}>
            {
                shuffleDeck ?
                    <div className={styles.deckContent} >
                        {
                            shuffleDeck.length != 0 ? shuffleDeck.map((deck: card) => {
                                return (
                                    <div key={deck.type + deck.number} className={styles.deckWithShuffle} onClick={() => handleCLickDeckCard(deck)}>
                                        {/* <Card image={deck.img}/> */}
                                        <CardFlip />
                                    </div>
                                )
                            }) :
                            <div className={styles.deckWithShuffle}>
                                <div>
                                    <EmplySpaceCard className={styles.restartDeck}> 
                                        <VscDebugRestart onClick={() => handleRestartDeck()} color="green" size="50px" className={styles.restartDeck} />
                                    </EmplySpaceCard> 

                                </div>
                            </div> 

                        }
                        <div className={styles.secondDeck}>
                            {
                                reusableDeck.length == 0 ? <EmplySpaceCard /> :  
                                reusableDeck.map((card: card, index) => {
                                    return (
                                        <div key={index} className={styles.reusableDeck}>
                                            <Card image={card.img} onClick={null}/>
                                        </div>
                                    ) 
                                })
                            }
                        </div>

                    </div>
                : 
                <>
                    <EmplySpaceCard />
                    <EmplySpaceCard />
                </>
            }
        </div>
    )
}

export default DeckStack