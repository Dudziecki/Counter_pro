import React, {useEffect, useState} from 'react';
import {Button} from "../button/Button.tsx";
import style from "./counter.module.css";
import {EditMode} from "../editMode/EditMode.tsx";
import {setValuesAC} from "../../counter-reducer.ts";
import {useAppDispatch} from "../../useAppDispatch.ts";
import {setButtonsDisabledAC, setErrorAC, setSetBtnDisabledAC, toggleEditModeAC} from "../../ui-reducer.ts";
import {useAppSelector} from "../../useAppSelector.ts";
import {selectEditMode} from "../../ui-selectors.ts";


type CounterPropsType = {
    value: number
    maxValue: number
    incrementFunc: () => void
    resetFunc: () => void
    isResetDisabled?: boolean
    isIncDisabled?: boolean
    isSet: boolean
    startValue: number
  }
export const Counter: React.FC<CounterPropsType> = ({
                                                        value,
                                                        maxValue,
                                                        incrementFunc,
                                                        resetFunc,
                                                        isResetDisabled,
                                                        isIncDisabled,
                                                        isSet,
                                                        startValue,

                                                    }) => {
    const isEditMode = useAppSelector(selectEditMode)
    const dispatch = useAppDispatch()

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);
    const setFunc = () => {
        dispatch(toggleEditModeAC())
        dispatch(setValuesAC({startValue: newStartValue, maxValue: newMaxValue}))
    }
    useEffect(() => {
        if (newStartValue < 0 || newMaxValue < 0 || newStartValue >= newMaxValue) {
            dispatch(setErrorAC({isError: true}))
            dispatch(setSetBtnDisabledAC({isSetDisabled: false}))
            // setIsButtonsDisabled(true);
            dispatch(setButtonsDisabledAC({isButtonsDisabled:true}))
        } else {

            dispatch(setErrorAC({isError: false}))
            dispatch(setSetBtnDisabledAC({isSetDisabled: true}))
            // setIsButtonsDisabled(false);
            dispatch(setButtonsDisabledAC({isButtonsDisabled:false}))
        }
    }, [newStartValue, newMaxValue]);
    return (
        <div className={style.Counter}>
            <EditMode isEditMode={isEditMode}
                      value={value}
                      startValue={startValue}
                      setStartValue={setNewStartValue}
                      setMaxValue={setNewMaxValue}
                      maxValue={maxValue}
                      stValue={newStartValue}
                      mxValue={newMaxValue}
            />
            <div className={`${style.wrapper} ${
                !isEditMode ? style.centered : ""
            }`}>
                {isEditMode && <Button onClick={incrementFunc} disabled={isIncDisabled}>INC</Button>}
                {isEditMode && <Button onClick={resetFunc} disabled={isResetDisabled}>RES</Button>}
                <Button onClick={setFunc} disabled={!isSet}>Set</Button>
            </div>
        </div>
    );
};


