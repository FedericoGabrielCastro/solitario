import { 
    ADD_LAST_CARD,
    REMOVE_LAST_CARD, 
    ADD_CARD_TO_REUSALBE,
    SHUFFLE_DECK,
    RESTART_REUSABLE
} from "../types";

type ReducerTypes = "ADD_LAST_CARD" | "REMOVE_LAST_CARD" | "ADD_CARD_TO_REUSALBE" | "SHUFFLE_DECK" | "RESTART_REUSABLE"

interface CardsGameStack {
    s: []
    c: []
    d: []
    h: []
    reusable: []
    deck: []
}

interface ICard {
    number: number
    type: string
    color: string
    img: string
    flip: boolean
}

const initialState: CardsGameStack = {
    s: [],
    c: [],
    d: [],
    h: [],
    reusable: [],
    deck: []
}

export const setLastCardReducer = (state = initialState, { type, card } : {
    type: ReducerTypes
    card: any
}) => {
    switch (type) {

        case SHUFFLE_DECK:
            const newState = {
                s: [],
                c: [],
                d: [],
                h: [],
                reusable: [],
                deck: []    
            }
            return newState

        case RESTART_REUSABLE:
            state.reusable.splice(0, state.deck.length)
            state.deck.push(...state.reusable)
            state.reusable.splice(0, state.reusable.length)
            // let cantCard = state.reusable.length
            // const newDeck = state.deck.concat(state.reusable)
            return {...state}

        case ADD_CARD_TO_REUSALBE:
            state.reusable.push(card)
            return state
            
            default:
        return state
    }
}
