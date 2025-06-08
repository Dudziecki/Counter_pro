import { createSlice } from "@reduxjs/toolkit";


const loadInitialState = () => {
    const savedStartValue = localStorage.getItem("Start Value");
    const savedMaxValue = localStorage.getItem("Max Value");
    const savedValue = localStorage.getItem("Increment Value");

    return {
        value: savedValue ? JSON.parse(savedValue) : CounterDefaults.IncrementValue,
        startValue: savedStartValue ? JSON.parse(savedStartValue) : CounterDefaults.StartValue,
        maxValue: savedMaxValue ? JSON.parse(savedMaxValue) : CounterDefaults.MaxValue,
    };
};

export type CounterState = {
    value: number;
    startValue: number;
    maxValue: number;
};

export enum CounterDefaults {
    StartValue = 0,
    MaxValue = 5,
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    IncrementValue = 0,
}

const initialState: CounterState = loadInitialState();

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: (create) => ({
        changeIncrementValueAC: create.reducer((state) => {
            if (state.value < state.maxValue) {
                state.value += 1;
                localStorage.setItem("Increment Value", JSON.stringify(state.value));
            }
        }),
        resetIncrementValueAC: create.reducer((state) => {
            state.value = state.startValue;
            localStorage.setItem("Increment Value", JSON.stringify(state.startValue));
        }),
        setValuesAC: create.reducer<{ startValue: number; maxValue: number }>((state, action) => {
            state.startValue = action.payload.startValue;
            state.maxValue = action.payload.maxValue;
            state.value = action.payload.startValue;
            localStorage.setItem("Start Value", JSON.stringify(state.startValue));
            localStorage.setItem("Max Value", JSON.stringify(state.maxValue));
            localStorage.setItem("Increment Value", JSON.stringify(state.startValue));
        }),
    }),
    selectors: {
        selectIncrementValue: (state): number => state.value,
        selectMaxValue: (state): number => state.maxValue,
        selectStartValue: (state): number => state.startValue
    }
});

export const { changeIncrementValueAC, resetIncrementValueAC, setValuesAC } = counterSlice.actions;
export const { selectIncrementValue, selectMaxValue, selectStartValue } = counterSlice.selectors;
export const counterReducer = counterSlice.reducer;