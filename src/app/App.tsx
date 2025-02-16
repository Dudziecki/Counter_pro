import  { useEffect, useState } from 'react';
import style from './App.module.css';
import {Counter} from "../components/counter/Counter.tsx";



function App() {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('Increment Value');
    return savedValue ? JSON.parse(savedValue) : 0;
  });

  const [maxValue, setMaxValue] = useState(() => {
    const savedValue = localStorage.getItem('Max Value');
    return savedValue ? JSON.parse(savedValue) : 5;
  });

  const [startValue, setStartValue] = useState(() => {
    const newStartValue = localStorage.getItem('Start Value');
    return newStartValue ? JSON.parse(newStartValue) : 0;
  });

  const [isSetDisabled, setIsSetDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isButtonsDisabled, setIsButtonsDisabled] = useState(false);
  const [isEditMode, setIsEditMode] = useState(true)

  useEffect(() => {
    const storedStartValue = localStorage.getItem('Start Value');
    const storedMaxValue = localStorage.getItem('Max Value');

    if (
        storedStartValue !== null && storedMaxValue !== null &&
        (startValue !== JSON.parse(storedStartValue) || maxValue !== JSON.parse(storedMaxValue))
    ) {

    }
  }, [startValue, maxValue]);

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
      const newValue = value + 1;
      setValue(newValue);
    }
  };

  useEffect(() => {
    localStorage.setItem('Increment Value', JSON.stringify(value));
  }, [value]);

  const onResBtnClickHandler = () => {
    const newStartValue = localStorage.getItem('Start Value');
    if (newStartValue) setValue(JSON.parse(newStartValue));
  };

  const startValueClickHandler = () => {
    setIsEditMode(!isEditMode)
    if (startValue < 0 || maxValue < 0 || startValue >= maxValue) return;
    localStorage.setItem('Max Value', JSON.stringify(maxValue));
    localStorage.setItem('Start Value', JSON.stringify(startValue));
    setValue(startValue);
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
            setStartValue={setStartValue}
            setMaxValue={setMaxValue}
            onClickValue={startValueClickHandler}
            isEditMode={isEditMode}
        />
      </div>
  );
}

export default App;
