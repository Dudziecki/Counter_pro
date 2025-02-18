import {RootState} from "../../../app/store.ts"

export const selectIncrementValue = (state: RootState) :number=> state.counter.value
export const selectMaxValue = (state: RootState) :number=> state.counter.maxValue
export const selectStartValue = (state: RootState) :number=> state.counter.startValue