import {createSlice} from "@reduxjs/toolkit";

export type CounterState ={
    value: number;
    startValue: number;
    maxValue: number;
}

export enum CounterDefaults {
    StartValue = 0,
    MaxValue = 5,
    IncrementValue = 0,
}


const initialState: CounterState = {
    value: CounterDefaults.IncrementValue,
    startValue:CounterDefaults.StartValue,
    maxValue: CounterDefaults.MaxValue,
};


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: (create) => ({
        changeIncrementValueAC: create.reducer((state) => {
            if (state.value < state.maxValue) {
                state.value += 1;
                // localStorage.setItem("Increment Value", JSON.stringify(state.value));
            }
        }),
        resetIncrementValueAC: create.reducer((state) => {
            state.value = state.startValue;
            // localStorage.setItem("Increment Value", JSON.stringify(state.startValue));
        }),
        setValuesAC: create.reducer<{ startValue: number; maxValue: number }>((state, action) => {
            state.startValue = action.payload.startValue;
            state.maxValue = action.payload.maxValue;
            state.value = action.payload.startValue;
            // localStorage.setItem("Start Value", JSON.stringify(state.startValue));
            // localStorage.setItem("Max Value", JSON.stringify(state.maxValue));
        }),
    }),
    selectors:{
        selectIncrementValue:(state):number=>state.value,
        selectMaxValue:(state):number=>state.maxValue,
        selectStartValue:(state):number=>state.startValue
    }
});
export const {changeIncrementValueAC,resetIncrementValueAC,setValuesAC}=counterSlice.actions
export const {selectIncrementValue,selectMaxValue,selectStartValue}=counterSlice.selectors
export const counterReducer=counterSlice.reducer




