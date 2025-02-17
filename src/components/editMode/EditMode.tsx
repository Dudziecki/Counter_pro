import React from 'react';
import {Display} from "../display/Display.tsx";
import style from "../counter/Counter.module.css";
import {InputComponent} from "../inputComponent/InputComponent.tsx";

type EditModePropsType = {
    isEditMode: boolean
    value: number
    startValue: number
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
                                                          setStartValue,
                                                          setMaxValue,
                                                          maxValue,
                                                          mxValue,
                                                          stValue
                                                      }) => {

    const resultValue = value === maxValue
    return (
        isEditMode
            ? (
                <Display value={value}
                         isMaxValue={resultValue}
                         startValue={startValue}
                />
            )
            : (
                <div className={style.Container}>
                    <InputComponent
                        label='max value'
                        value={mxValue}
                        onChange={setMaxValue}
                    />
                    <InputComponent
                        label='start value'
                        value={stValue}
                        onChange={setStartValue}
                    />
                </div>
            )
    )

};
