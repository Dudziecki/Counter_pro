import {configureStore} from '@reduxjs/toolkit'
import {counterReducer, counterSlice} from "../features/counter/model/counterSlice.ts";
import {uiReducer, uiSlice} from "../features/counter/model/uiSlice.ts";
import {loadState} from "../common/utils/loadFromLocalStorage.ts";
import {saveState} from "../common/utils/saveInLocalstorage.ts";


// объединение reducer'ов с помощью combineReducers

const preloadedState = loadState()|| undefined;
// создание store
export const store = configureStore({
    reducer: {
        [counterSlice.name]:counterReducer,
        [uiSlice.name]:uiReducer,
    },
    preloadedState,
})
store.subscribe(() => {
    saveState(store.getState());
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store