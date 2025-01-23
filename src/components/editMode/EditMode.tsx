import React from 'react';
import {Display} from "../display/Display.tsx";
import style from "../counter/Counter.module.css";
import {InputComponent} from "../inputComponent/InputComponent.tsx";

type EditModePropsType = {
    isEditMode: boolean
    value: number
    startValue: number
    isError: boolean
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    maxValue: number



}
export const EditMode: React.FC<EditModePropsType> = ({
                                                          isEditMode,
                                                          value,
                                                          startValue,
                                                          isError,
                                                          setStartValue,
                                                          setMaxValue,
                                                          maxValue,


                                                      }) => {
    const resultValue = value === maxValue
    return (
        isEditMode ? (<Display value={value}
                               isMaxValue={resultValue}
                               startValue={startValue}

            />)
            : (<div className={style.Container}>
                    <InputComponent
                        label='max value'
                        value={maxValue}
                        onChange={setMaxValue}

                        isError={isError}
                    />
                    <InputComponent
                        label='start value'
                        value={startValue}
                        onChange={setStartValue}

                        isError={isError}
                    />
                </div>

            )
    )

};
