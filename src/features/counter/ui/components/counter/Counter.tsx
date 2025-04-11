import React, { useEffect, useState } from 'react';
import { Button } from "../button/Button.tsx";
import style from "./Counter.module.css";
import { EditMode } from "../editMode/EditMode.tsx";
import {
    changeIncrementValueAC,
    resetIncrementValueAC,
    selectIncrementValue,
    selectMaxValue,
    selectStartValue,
    setValuesAC
} from "../../../model/counterSlice.ts";
import { useAppDispatch } from "../../../../../common/hooks/useAppDispatch.ts";
import {
    selectButtonsDisabled,
    selectEditMode,
    selectSetBtn,
    setButtonsDisabledAC,
    setErrorAC,
    setSetBtnDisabledAC,
    toggleEditModeAC
} from "../../../model/uiSlice.ts";
import { useAppSelector } from "../../../../../common/hooks/useAppSelector.ts";

export const Counter: React.FC = () => {
    const value = useAppSelector(selectIncrementValue);
    const maxValue = useAppSelector(selectMaxValue);
    const startValue = useAppSelector(selectStartValue);

    const isEditMode = useAppSelector(selectEditMode);
    const isButtonsDisabled = useAppSelector(selectButtonsDisabled);
    const isSetDisabled = useAppSelector(selectSetBtn);
    const dispatch = useAppDispatch();

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);

    const isResetDisabled = value === startValue || isButtonsDisabled || !isSetDisabled;
    const isIncDisabled = value === maxValue || isButtonsDisabled || !isSetDisabled;

    const setFunc = () => {
        dispatch(toggleEditModeAC());
        dispatch(setValuesAC({ startValue: newStartValue, maxValue: newMaxValue }));
    };

    const onIncBtnClickHandler = () => {
        dispatch(changeIncrementValueAC());
    };

    const onResBtnClickHandler = () => {
        dispatch(resetIncrementValueAC());
    };

    useEffect(() => {
        if (newStartValue < 0 || newMaxValue < 0 || newStartValue >= newMaxValue) {
            dispatch(setErrorAC({ isError: true }));
            dispatch(setSetBtnDisabledAC({ isSetDisabled: false }));
            dispatch(setButtonsDisabledAC({ isButtonsDisabled: true }));
        } else {
            dispatch(setErrorAC({ isError: false }));
            dispatch(setSetBtnDisabledAC({ isSetDisabled: true }));
            dispatch(setButtonsDisabledAC({ isButtonsDisabled: false }));
        }
    }, [newStartValue, newMaxValue, dispatch]);

    return (
        <div className={style.Counter}>
            <EditMode
                isEditMode={isEditMode}
                value={value}
                startValue={startValue}
                setStartValue={setNewStartValue}
                setMaxValue={setNewMaxValue}
                maxValue={maxValue}
                stValue={newStartValue}
                mxValue={newMaxValue}
            />
            <div className={`${style.wrapper} ${!isEditMode ? style.centered : ""}`}>
                {isEditMode && <Button onClick={onIncBtnClickHandler} disabled={isIncDisabled}>INC</Button>}
                {isEditMode && <Button onClick={onResBtnClickHandler} disabled={isResetDisabled}>RES</Button>}
                <Button onClick={setFunc} disabled={!isSetDisabled}>Set</Button>
            </div>
        </div>
    );
};