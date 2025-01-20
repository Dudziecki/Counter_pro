import React from 'react';


type InputComponentProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
    className: string;
    isError: boolean;
};

export const InputComponent: React.FC<InputComponentProps> = ({
                                                                  label,
                                                                  value,
                                                                  onChange,
                                                                  className,
                                                                  isError
                                                              }) => {
    return (
        <div className={className}>
            <label className={'label'}>{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{
                    border: isError ? '2px solid red' : '1px solid black',
                    backgroundColor: isError ? 'rgba(255, 0, 0, 0.1)' : 'white'
                }}
            />
        </div>
    );
};
