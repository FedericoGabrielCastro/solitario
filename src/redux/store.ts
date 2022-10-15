import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { setCardDeckReducer } from "./reducers/setCardDeckReducers";

const reducers = combineReducers({
    setCardDeckReducer: setCardDeckReducer // set deck 
})

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>