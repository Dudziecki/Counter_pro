import React from 'react';
import {Button} from "../button/Button.tsx";
import style from "./counter.module.css";
import {EditMode} from "../editMode/EditMode.tsx";



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
    setStartValue: (startValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    onClickValue: () => void;
    isEditMode: boolean
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
                                                        setStartValue,
                                                        setMaxValue,
                                                        onClickValue,
                                                        isEditMode
                                                    }) => {



    return (
        <div className={style.Counter}>
            <EditMode isEditMode={isEditMode}
                     value={value}
                     startValue={startValue}
                     isError={isError}
                     setStartValue={setStartValue}
                     setMaxValue={setMaxValue}
                     maxValue={maxValue}

            />
            <div className={`${style.wrapper} ${
                !isEditMode ? style.centered : ""
            }`}>
                {isEditMode && <Button onClick={incrementFunc} disabled={isIncDisabled}>INC</Button>}
                {isEditMode && <Button onClick={resetFunc} disabled={isResetDisabled}>RES</Button>}
                <Button onClick={onClickValue} disabled={!isSet}>Set</Button>
            </div>
        </div>
    );
};


