import {RootState} from "./app/store.ts";

export const selectEditMode=(state:RootState):boolean=>state.ui.isEditMode
export const selectError=(state:RootState):boolean=>state.ui.isError
export const selectSetBtn=(state:RootState):boolean=>state.ui.isSetDisabled
export const selectButtonsDisabled=(state:RootState):boolean=>state.ui.isButtonsDisabled