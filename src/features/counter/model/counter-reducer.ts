import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// export const changeIncrementValueAC=createAction('counter/changeIncrementValue')
// export const resetIncrementValueAC=createAction('counter/resetIncrementValue')
// export const setValuesAC=createAction<{ startValue: number; maxValue: number }>('counter/setValues')




export type CounterState ={
    value: number;
    startValue: number;
    maxValue: number;
}


const initialState: CounterState = {
    value: Number(localStorage.getItem("Increment Value")) || 0,
    startValue: Number(localStorage.getItem("Start Value")) || 0,
    maxValue: Number(localStorage.getItem("Max Value")) || 5,
};

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value: Number(localStorage.getItem("Increment Value")) || 0,
        startValue: Number(localStorage.getItem("Start Value")) || 0,
        maxValue: Number(localStorage.getItem("Max Value")) || 5,
    } as CounterState,
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
        setValuesAC: create.reducer(
            (state, action) => {
                state.startValue = action.payload.startValue;
                state.maxValue = action.payload.maxValue;
                state.value = action.payload.startValue;
                localStorage.setItem("Start Value", JSON.stringify(state.startValue));
                localStorage.setItem("Max Value", JSON.stringify(state.maxValue));
            },
            (startValue: number, maxValue: number) => ({
                payload: { startValue, maxValue },
            })
        ),
    }),
})
export const {changeIncrementValueAC,resetIncrementValueAC,setValuesAC}=counterSlice.actions
// export const _counterReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(changeIncrementValueAC, (state) => {
//             if (state.value < state.maxValue) {
//                 state.value += 1;
//                 localStorage.setItem("Increment Value", JSON.stringify(state.value));
//             }
//         })
//         .addCase(resetIncrementValueAC, (state) => {
//             state.value = state.startValue;
//             localStorage.setItem("Increment Value", JSON.stringify(state.startValue));
//         })
//         .addCase(setValuesAC, (state, action) => {
//             state.startValue = action.payload.startValue;
//             state.maxValue = action.payload.maxValue;
//             state.value = action.payload.startValue;
//             localStorage.setItem("Start Value", JSON.stringify(state.startValue));
//             localStorage.setItem("Max Value", JSON.stringify(state.maxValue));
//         });
// });
