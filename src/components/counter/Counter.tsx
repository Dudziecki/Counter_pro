import React from 'react';
import {Display} from "../display/Display.tsx";
import {Button} from "../button/Button.tsx";
import {InputComponent} from "../inputComponent/InputComponent.tsx";
import style from "./counter.module.css";


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
    isEditMode:boolean
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

    const resultValue = value === maxValue
    const setEditMode = () => {

       return (
           isEditMode ? (<Display value={value}
                              isMaxValue={resultValue}
                              isSet={isSet}
                              startValue={startValue}
                              isError={isError}
                />)
                : (<div className='InputContainer'>
                    <InputComponent
                        label='max value'
                        value={maxValue}
                        onChange={setMaxValue}
                        className='InputStyled'
                        isError={isError}
                    />
                    <InputComponent
                        label='start value'
                        value={startValue}
                        onChange={setStartValue}
                        className='InputStyled'
                        isError={isError}
                    />
                </div>))

    }
    return (
        <div className={style.Counter}>
            {setEditMode()}
            <div className='wrapper'>
                {isEditMode && <Button onClick={incrementFunc}>INC</Button>}
                {isEditMode && <Button onClick={resetFunc}>RES</Button>}
                <Button onClick={onClickValue} >Set</Button>
            </div>
        </div>
    );
};


