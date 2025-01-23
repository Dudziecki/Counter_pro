import React, {ReactNode} from 'react'
import style from './Button.module.css'

type ButtonPropsType = {
    children?: ReactNode
    onClick: () => void
    className?: string
    disabled?: boolean
}
export const Button: React.FC<ButtonPropsType> = ({children, onClick, disabled}) => {
    return (
        <button onClick={() => onClick()} className={style.button} disabled={disabled}>{children}</button>
    );
};

