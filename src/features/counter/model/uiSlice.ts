import {createSlice} from "@reduxjs/toolkit"

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

// export const toggleEditModeAC = createAction('ui/toggleEditMode')
// export const setErrorAC = createAction<{ isError: boolean }>('ui/setError')
// export const setSetBtnDisabledAC = createAction<{ isSetDisabled: boolean }>('ui/setSetBtnDisabled')
// export const setButtonsDisabledAC = createAction<{ isButtonsDisabled: boolean }>('ui/setButtonsDisabled')

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: (create) => ({
        toggleEditModeAC: create.reducer((state) => {
            state.isEditMode = !state.isEditMode
        }),
        setErrorAC: create.reducer<{ isError: boolean }>((state, action) => {
            state.isError = action.payload.isError
        }),
        setSetBtnDisabledAC: create.reducer<{ isSetDisabled: boolean }>((state, action) => {
            state.isSetDisabled = action.payload.isSetDisabled
        }),
        setButtonsDisabledAC: create.reducer<{ isButtonsDisabled: boolean }>((state, action) => {
            state.isButtonsDisabled = action.payload.isButtonsDisabled
        })
    }),
    selectors: {
        selectEditMode: (state): boolean => state.isEditMode,
        selectError: (state): boolean => state.isError,
        selectSetBtn: (state): boolean => state.isSetDisabled,
        selectButtonsDisabled: (state): boolean => state.isButtonsDisabled
    }
})
export const {toggleEditModeAC, setButtonsDisabledAC, setSetBtnDisabledAC, setErrorAC} = uiSlice.actions
export const {selectEditMode,selectSetBtn,selectButtonsDisabled,selectError}=uiSlice.selectors
export const uiReducer = uiSlice.reducer

