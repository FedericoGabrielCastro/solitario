import { useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import Card from '../card/card'
import CardFlip from '../cardFlip/cardFlip'
import EmplySpaceCard from '../emplySpaceCard/emplySpaceCard'
import styles from './rowCardsStack.module.css'

interface ICard {
    number: number
    type: string
    color: string
    img: string
}

const RowCardsStack = () => {

    const rowsCard: any = useAppSelector(store => store.setCardDeckReducer)

    let [selectCard, setSelectCard] = useState<ICard | null>(null)
    let [stackRow, setStackRow] = useState<any>(null)

    const handleClickCard = (card: ICard, stack: any) => {
        if (selectCard === null) {
            console.log("se guardo una carta")
            setSelectCard(card)
            setStackRow(stack)
        } else {
            try {
                if (selectCard === card)  {
                    console.log("son iguales, carta borrada")
                    setSelectCard(null)
                    setStackRow(null)
                } else if (selectCard.color != card.color && selectCard.number + 1 == card.number) {
                    console.log("son distintas")
                    stackRow.pop()
                    stack.push(selectCard)
                    setSelectCard(null)
                    setStackRow(null)
                } else {
                    setSelectCard(null)
                    setStackRow(null)
                }
            } catch (error) {
                console.log("son diferentes")
                setSelectCard(null)
                setStackRow(null)
            }
        }
    }

    return (
        <div className={styles.rowCardStack}>
            {
                rowsCard.newDeck?.map((stack : any, index: number) => {
                    return (
                        <div key={index}>
                            <div>
                                <EmplySpaceCard />
                            </div>
                            {
                                stack.map((card: ICard, index: number) => (
                                    <div className={styles.stackCard} key={index}>
                                        {
                                            stack == 0 ? <EmplySpaceCard /> :
                                                stack.splice() == (stack.length -1 == 0 ) ? 
                                                // (stack[stack.length - 1] != card) ? <CardFlip /> :  
                                                <Card image={card.img}  onClick={() => handleClickCard(stack[index], stack)}/>
                                                : <Card image={card.img} onClick={() => handleClickCard(stack[index], stack)}/> 
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