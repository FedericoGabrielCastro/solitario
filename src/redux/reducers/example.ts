import { Reducer } from "@reduxjs/toolkit"
import { COUNTER_REDUCER } from "../types"

export interface CounterState {
    value: number
}

type ReducerTypes = "COUNTER_REDUCER" 

const initialState: CounterState = {
    value: 2
}

export const counterReducer = (state = initialState,{ type, counter}: {
    type: ReducerTypes,
    counter: number
}) => {
    switch (type) {

        case COUNTER_REDUCER:
            let newState = counter + state.value
            return {value: newState}

    default:
        return state
    }
}
