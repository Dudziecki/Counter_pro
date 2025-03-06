import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type CounterState = {
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
    startValue: CounterDefaults.StartValue,
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
    extraReducers: (builder) => {
        builder.addCase(loadCounterStateThunk.fulfilled, (state, action) => {
            state.startValue = action.payload.startValue;
            state.maxValue = action.payload.maxValue;
            state.value = action.payload.value;
        });
    },
    selectors: {
        selectIncrementValue: (state): number => state.value,
        selectMaxValue: (state): number => state.maxValue,
        selectStartValue: (state): number => state.startValue
    }
});

export const loadCounterStateThunk = createAsyncThunk(
    `${counterSlice.name}/loadState`,
    async () => {
        const savedStartValue = localStorage.getItem("Start Value")
        const savedMaxValue = localStorage.getItem("Max Value")
        const savedValue = localStorage.getItem("Increment Value")
        return {
            startValue: savedStartValue ? JSON.parse(savedStartValue) : CounterDefaults.StartValue,
            maxValue: savedMaxValue ? JSON.parse(savedMaxValue) : CounterDefaults.MaxValue,
            value: savedValue ? JSON.parse(savedValue) : CounterDefaults.IncrementValue,
        }
    }
)
export const saveCounterStateThunk = createAsyncThunk(
    `${counterSlice.name}/saveState`,
    async (_, {getState}) => {
        const state = getState() as { counter: CounterState }
        localStorage.setItem("Start Value", JSON.stringify(state.counter.startValue));
        localStorage.setItem("Max Value", JSON.stringify(state.counter.maxValue));
        localStorage.setItem("Increment Value", JSON.stringify(state.counter.value));
    }
)
export const {changeIncrementValueAC, resetIncrementValueAC, setValuesAC} = counterSlice.actions
export const {selectIncrementValue, selectMaxValue, selectStartValue} = counterSlice.selectors
export const counterReducer = counterSlice.reducer




