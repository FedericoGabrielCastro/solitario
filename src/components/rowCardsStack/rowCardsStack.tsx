import { useAppSelector } from '../../hooks/reduxHooks'
import Card from '../card/card'
import CardFlip from '../cardFlip/cardFlip'
import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'
import styles from './rowCardsStack.module.css'

const RowCardsStack = () => {

    const rowsCard: any = useAppSelector(store => store.setCardDeckReducer)

    return (
        <div className={styles.rowCardStack}>
            {
                rowsCard.newDeck?.map((stack : any, index: number) => {
                    return (
                        <div key={index}>
                            {
                                stack.map((card: any, index: number) => (
                                    <div className={styles.stackCard} key={index}>
                                        {
                                            card = null ? <EmplySpaceCard /> :
                                                stack.splice() == (stack.length -1 == 0 ) ? 
                                                (stack[stack.length - 1] != card) ? <CardFlip /> :  
                                                <Card image={card.img} />
                                                : <Card image={card.img} /> 
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    )
                }) 
            }       
        </div>
    )
}

export default RowCardsStack