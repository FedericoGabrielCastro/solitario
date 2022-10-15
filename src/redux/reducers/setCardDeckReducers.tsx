import { SET_CARD_DECK } from "../types";

type CardType = "C" | "D" | "H" | "S" 
interface ColorCard {
    D: "red"
    H: "red"
    S: "black"
    C: "black"
}

const initialState: [] = []

type ReducerType = "SET_CARD_DECK"

export const setCardDeckReducer = (state = initialState, { type } : {
    type: ReducerType
}) => {
    switch (type) {

        case SET_CARD_DECK:

            const typeCard: CardType[] = ["C", "D", "H", "S"]
            const colorCard: ColorCard = {
                D: "red",
                H: "red",
                S: "black", 
                C: "black"
            }

            let newState: Array<ColorCard | CardType | {img: string}> = state

            for (let indexCard = 1; indexCard <= 13; indexCard++) {
                for (let cardSuit = 0; cardSuit < typeCard.length; cardSuit++) {
                    const card = {
                        number: indexCard,
                        type: typeCard[cardSuit],
                        color: colorCard[typeCard[cardSuit]],
                        img: `${indexCard}${typeCard[cardSuit]}.png`
                    }
                    newState = newState.concat(card) 
                }
            }
            
            return newState

    default:
        return state
    }
}
