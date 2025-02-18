import {createAction, createReducer} from "@reduxjs/toolkit"

export type UIState = {
    isEditMode: boolean
    isError: boolean
    isSetDisabled: boolean
    isButtonsDisabled: boolean
}

const initialState: UIState = {
    isEditMode: true,
    isError: false,
    isSetDisabled: true,
    isButtonsDisabled: false,
}

export const toggleEditModeAC = createAction('ui/toggleEditMode')
export const setErrorAC = createAction<{ isError: boolean }>('ui/setError')
export const setSetBtnDisabledAC = createAction<{ isSetDisabled: boolean }>('ui/setSetBtnDisabled')
export const setButtonsDisabledAC = createAction<{ isButtonsDisabled: boolean }>('ui/setButtonsDisabled')

export const uiReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleEditModeAC, (state) => {
            state.isEditMode = !state.isEditMode;
        })
        .addCase(setErrorAC, (state, action) => {
            state.isError = action.payload.isError;
        })
        .addCase(setSetBtnDisabledAC, (state, action) => {
            state.isSetDisabled = action.payload.isSetDisabled;
        })
        .addCase(setButtonsDisabledAC, (state, action) => {
            state.isButtonsDisabled = action.payload.isButtonsDisabled
        });
});
