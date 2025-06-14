import {configureStore} from '@reduxjs/toolkit'
import {counterReducer, counterSlice} from "../features/counter/model/counterSlice.ts";
import {uiReducer, uiSlice} from "../features/counter/model/uiSlice.ts";


// объединение reducer'ов с помощью combineReducers


// создание store
export const store = configureStore({
    reducer: {
        [counterSlice.name]:counterReducer,
        [uiSlice.name]:uiReducer,
    },

})


// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window.store = store