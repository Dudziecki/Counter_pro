import React from "react"
import style from "./Display.module.css"

type TextAreaPropsType = {
    value?: number;
    isMaxValue?: boolean;

    startValue: number;

};

export const Display: React.FC<TextAreaPropsType> = ({ value, isMaxValue, }) => {
    return (
        <h1
            className={style.Display}
            style={{
                color: isMaxValue ? 'red' : ' #63dbfd',
            }}
        >
            {value}

        </h1>
    );
};
