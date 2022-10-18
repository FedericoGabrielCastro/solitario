import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { setCardDeckReducer } from "./reducers/setCardDeckReducers";
import { setLastCardReducer } from "./reducers/setLastCardReducer";

const reducers = combineReducers({
    setCardDeckReducer: setCardDeckReducer, // set deck 
    setLastCardReducer: setLastCardReducer // set cards deck top
})

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>