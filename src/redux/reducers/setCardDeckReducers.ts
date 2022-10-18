import { SET_CARD_DECK, SHUFFLE_DECK } from "../types";

type CardType = "C" | "D" | "H" | "S" 
interface ColorCard {
    D: "red"
    H: "red"
    S: "black"
    C: "black"
}

const initialState: [] = []

type ReducerType = "SET_CARD_DECK" | "SHUFFLE_DECK"

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
            state = []
            let newState: Array<ColorCard | CardType | {img: string}> = state

            for (let indexCard = 1; indexCard <= 13; indexCard++) {
                for (let cardSuit = 0; cardSuit < typeCard.length; cardSuit++) {
                    const card = {
                        number: indexCard,
                        type: typeCard[cardSuit],
                        color: colorCard[typeCard[cardSuit]],
                        img: `${indexCard}${typeCard[cardSuit]}.png`,
                        flip: true
                    }
                    newState = newState.concat(card) 
                }
            }
            return newState

        case SHUFFLE_DECK:
            
            const shuffleDeck = state.map(card => ({card, sort: Math.random()}))
                .sort((cardA, cardB) => cardA.sort - cardB.sort)
                .map(({card}) => card) 

            let newDeck: Array<[]> = []
            
            for (let stacks = 0; stacks < 7; stacks++) {
                newDeck.push([])
                for (let stack = 0; stack < stacks + 1; stack++) { 
                    const firstCard = shuffleDeck[0]
                    shuffleDeck.shift()
                    newDeck[stacks].push(firstCard) 
                }
            }
            
            return {newDeck, shuffleDeck}

        default:
            return state
    }
}
