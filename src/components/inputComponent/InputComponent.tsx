import React from 'react'
import style from './InputComponent.module.css'


type InputComponentProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;

    isError: boolean;
};

export const InputComponent: React.FC<InputComponentProps> = ({
                                                                  label,
                                                                  value,
                                                                  onChange,

                                                                  isError
                                                              }) => {


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
