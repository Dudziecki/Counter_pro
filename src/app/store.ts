import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../counter-reducer.ts";
import {uiReducer} from "../ui-reducer.ts";


// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
    counter: counterReducer,
    ui:uiReducer

})

// создание store
export const store = configureStore({
    reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store