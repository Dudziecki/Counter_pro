import React, {useState} from 'react';
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
    mxValue: number
    stValue: number



}
export const EditMode: React.FC<EditModePropsType> = ({
                                                          isEditMode,
                                                          value,
                                                          startValue,
                                                          isError,
                                                          setStartValue,
                                                          setMaxValue,
                                                          maxValue,
                                                          mxValue,
                                                          stValue


                                                      }) => {
    // const [stValue,setStartValue] = useState(startValue);
    // const [mxValue,setmxValue] = useState(maxValue);
    const resultValue = value === maxValue
    return (
        isEditMode ? (<Display value={value}
                               isMaxValue={resultValue}
                               startValue={startValue}

            />)
            : (<div className={style.Container}>
                    <InputComponent
                        label='max value'
                        value={mxValue}
                        onChange={setMaxValue}

                        isError={isError}
                    />
                    <InputComponent
                        label='start value'
                        value={stValue}
                        onChange={setStartValue}

                        isError={isError}
                    />
                </div>

            )
    )

};
