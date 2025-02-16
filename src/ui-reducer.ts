import {createReducer} from "@reduxjs/toolkit";

// Определяем тип состояния UI
interface UIState {
    isEditMode: boolean;
    isError: boolean;
    isSetDisabled: boolean;
    isButtonsDisabled: boolean;
}

// Начальное состояние
const initialState: UIState = {
    isEditMode: true,
    isError: false,
    isSetDisabled: true,
    isButtonsDisabled: false,
};


// Создаем редьюсер
export const uiReducer = createReducer(initialState, (builder) => {
    builder
        .addCase("ui/toggleEditMode", (state) => {
            state.isEditMode = !state.isEditMode;
        })
        // .addCase("ui/setError", (state, action: PayloadAction<boolean>) => {
        //     state.isError = action.payload;
        // })
        // .addCase("ui/setSetDisabled", (state, action: PayloadAction<boolean>) => {
        //     state.isSetDisabled = action.payload;
        // })
        // .addCase("ui/setButtonsDisabled", (state, action: PayloadAction<boolean>) => {
        //     state.isButtonsDisabled = action.payload;
        // });
});
