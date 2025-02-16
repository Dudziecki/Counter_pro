import React, {useState} from 'react';
import {Button} from "../button/Button.tsx";
import style from "./counter.module.css";
import {EditMode} from "../editMode/EditMode.tsx";
import {setValuesAC} from "../../counter-reducer.ts";
import {useAppDispatch} from "../../useAppDispatch.ts";


type CounterPropsType = {
    value: number
    maxValue: number
    incrementFunc: () => void
    resetFunc: () => void
    isResetDisabled?: boolean
    isIncDisabled?: boolean
    isSet: boolean
    startValue: number
    isError: boolean
    // setStartValue: (startValue: number) => void;
    // setMaxValue: (maxValue: number) => void;
    onClickValue: () => void;
    isEditMode: boolean
    setIsEditMode:(isEditMode: boolean)=>void
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
                                                        isError,
                                                        // setStartValue,
                                                        // setMaxValue,
                                                        onClickValue,
                                                        isEditMode,
                                                        setIsEditMode
                                                    }) => {
    const dispatch = useAppDispatch()

    const [newStartValue, setNewStartValue] = useState(startValue);
    const [newMaxValue, setNewMaxValue] = useState(maxValue);
    const setFunc = () => {
        setIsEditMode(!isEditMode)
        dispatch(setValuesAC({startValue:newStartValue, maxValue:newMaxValue}))
    }
    return (
        <div className={style.Counter}>
            <EditMode isEditMode={isEditMode}
                      value={value}
                      startValue={startValue}
                      isError={isError}
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


