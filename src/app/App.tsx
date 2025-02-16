import {useEffect, useState} from 'react';
import style from './App.module.css';
import {Counter} from "../components/counter/Counter.tsx";
import {selectIncrementValue, selectMaxValue, selectStartValue} from "../counter-selectors.ts";
import {useAppSelector} from "../useAppSelector.ts";
import {useAppDispatch} from "../useAppDispatch.ts";
import {changeIncrementValueAC, resetIncrementValueAC, setValuesAC} from "../counter-reducer.ts";


function App() {
    const value = useAppSelector(selectIncrementValue);
    const maxValue = useAppSelector(selectMaxValue);
    const startValue = useAppSelector(selectStartValue);
    const dispatch = useAppDispatch()


    const [isSetDisabled, setIsSetDisabled] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
    const [isEditMode, setIsEditMode] = useState(true)

    // useEffect(() => {
    //   const storedStartValue = localStorage.getItem('Start Value');
    //   const storedMaxValue = localStorage.getItem('Max Value');
    //
    //   if (
    //       storedStartValue !== null && storedMaxValue !== null &&
    //       (startValue !== JSON.parse(storedStartValue) || maxValue !== JSON.parse(storedMaxValue))
    //   ) {
    //
    //   }
    // }, [startValue, maxValue]);

    useEffect(() => {
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) {
            setIsError(true);
            setIsSetDisabled(false);
            setIsButtonsDisabled(true);
        } else {
            setIsError(false);
            setIsSetDisabled(true);
            setIsButtonsDisabled(false);
        }
    }, [startValue, maxValue]);

    let isResetDisabled = value === startValue || isButtonsDisabled || !isSetDisabled;
    let isIncDisabled = value === maxValue || isButtonsDisabled || !isSetDisabled;

    const onIncBtnClickHandler = () => {
        if (value < maxValue) {

            dispatch(changeIncrementValueAC())
        }
    };

    useEffect(() => {
        localStorage.setItem('Increment Value', JSON.stringify(value));
    }, [value]);

    const onResBtnClickHandler = () => {

        dispatch(resetIncrementValueAC())
    };

    const startValueClickHandler = () => {
        setIsEditMode(!isEditMode)
        if (startValue < 0 || maxValue < 0 || startValue >= maxValue) return;
        dispatch(setValuesAC({startValue, maxValue}))
        // setValue(startValue);
        setIsSetDisabled(true);
        // setStartValue(newStartValue) newStartValue, newMaxValue
    };

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
                isError={isError}
                // setStartValue={setStartValue}
                // setMaxValue={setMaxValue}
                onClickValue={startValueClickHandler}
                isEditMode={isEditMode}
                setIsEditMode={setIsEditMode}
            />
        </div>
    );
}

export default App;
