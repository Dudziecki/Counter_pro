import React from "react";

type TextAreaPropsType = {
    value?: number;
    isMaxValue?: boolean;
    isSet: boolean;
    startValue: number;
    isError: boolean;
};

export const Display: React.FC<TextAreaPropsType> = ({ value, isMaxValue, isSet, isError }) => {
    return (
        <h1
            className='styledOutput'
            style={{
                color: isMaxValue ? 'red' : 'black',
            }}
        >
            {isError ? <span style={{color:'red'}}>Incorrect input</span> : isSet ? value : <span style={{fontSize:'25px'}}>enter the values and click set</span>}

        </h1>
    );
};
