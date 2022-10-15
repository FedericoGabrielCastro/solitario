import { AnyAction } from "@reduxjs/toolkit"
import { COUNTER_REDUCER } from "../types"

export const counterAction = (counter: number) => ({
    type: COUNTER_REDUCER,
    counter: counter
})
