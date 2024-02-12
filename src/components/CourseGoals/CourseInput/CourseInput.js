import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value.trim();
    setIsValid(inputValue.length > 0);
    setIsTouched(true);
    setEnteredValue(inputValue);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
     if (!isValid) {
      setIsTouched(true);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsValid(false);
    setIsTouched(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && isTouched ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
