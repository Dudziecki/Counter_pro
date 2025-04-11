import {RootState} from "../../app/store.ts";

export const _saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        console.error("Ошибка сохранения в localStorage", err);
    }
};