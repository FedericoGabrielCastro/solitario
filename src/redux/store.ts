import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./reducers/example";
import { setCardDeckReducer } from "./reducers/setCardDeckReducers";

const reducers = combineReducers({
    counterReducer: counterReducer,
    setCardDeckReducer: setCardDeckReducer // set deck 
})

export const store = configureStore({
    reducer: reducers
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>