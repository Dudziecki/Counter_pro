import {useEffect} from 'react'
import style from './App.module.css'
import {Counter} from "../components/counter/Counter.tsx";
import {selectIncrementValue, selectMaxValue, selectStartValue} from "../counter-selectors.ts"
import {useAppSelector} from "../useAppSelector.ts"
import {useAppDispatch} from "../useAppDispatch.ts"
import {changeIncrementValueAC, resetIncrementValueAC} from "../counter-reducer.ts"
import {selectButtonsDisabled, selectSetBtn} from "../ui-selectors.ts"


function App() {
    const value = useAppSelector(selectIncrementValue)
    const maxValue = useAppSelector(selectMaxValue)
    const startValue = useAppSelector(selectStartValue)
    const isSetDisabled = useAppSelector(selectSetBtn)
    const isButtonsDisabled = useAppSelector(selectButtonsDisabled)

    const dispatch = useAppDispatch()

    const isResetDisabled = value === startValue || isButtonsDisabled || !isSetDisabled
    const isIncDisabled = value === maxValue || isButtonsDisabled || !isSetDisabled

    const onIncBtnClickHandler = () => {
        if (value < maxValue) {
            dispatch(changeIncrementValueAC())
        }
    }

    useEffect(() => {
        localStorage.setItem('Increment Value', JSON.stringify(value));
    }, [value])

    const onResBtnClickHandler = () => dispatch(resetIncrementValueAC())
    return (
        <div className={style.App}>
            <Counter
                value={value}
                maxValue={maxValue}
                incrementFunc={onIncBtnClickHandler}
                resetFunc={onResBtnClickHandler}
                isResetDisabled={isResetDisabled}
                isIncDisabled={isIncDisabled}
                isSet={isSetDisabled}
                startValue={startValue}
            />
        </div>
    );
}

export default App
