import React from 'react'
import style from './InputComponent.module.css'
import {useAppSelector} from "../../../../../common/hooks/useAppSelector.ts";
import {selectError} from "../../../model/ui-selectors.ts";


type InputComponentProps = {
    label: string
    value: number
    onChange: (value: number) => void
}

export const InputComponent: React.FC<InputComponentProps> = ({
                                                                  label,
                                                                  value,
                                                                  onChange,
                                                              }) => {
    const isError = useAppSelector(selectError)

    return (
        <div className={style.GroupLabelInput}>
            <label className={style.label}>{label}</label>
            <input
                className={style.Input}
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    border: isError ? '2px solid red' : '2px solid #63dbfd',
                    backgroundColor: isError ? 'rgba(255, 0, 0, 0.1)' : 'white'
                }}
            />
        </div>
    );
};
