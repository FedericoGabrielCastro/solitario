import { AnyAction } from "redux";
import { 
    ADD_LAST_CARD,
    REMOVE_LAST_CARD, 
    ADD_CARD_TO_REUSALBE,
    RESTART_REUSABLE
} from "../types";

export const addLastCardAction = () : AnyAction => ({
    type: ADD_LAST_CARD,
})

export const removeLastCardAction = () : AnyAction  => ({
    type: REMOVE_LAST_CARD,
})

export const addCardToReusableAction = (deck : AnyAction) => ({
    type : ADD_CARD_TO_REUSALBE,
    card: deck
})

export const restartDeckAction = () : AnyAction=> ({
    type : RESTART_REUSABLE,
})