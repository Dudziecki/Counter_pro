import React, {ReactNode} from 'react';

type ButtonPropsType = {
    children?: ReactNode
    onClick: () => void
    className?: string
    disabled?: boolean
}
export const Button: React.FC<ButtonPropsType> = ({children, onClick, disabled}) => {
    return (
        <button onClick={() => onClick()} className={'ll'} disabled={disabled}>{children}</button>
    );
};

