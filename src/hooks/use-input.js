import {useReducer, useState} from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched};
    }
    if (action.type === 'BLUR') {
        return {value: state.value, isTouched: true};
    }
    if (action.type === 'RESET') {
        // reset the state properties:
        return {value: '', isTouched: false};
    }

    return initialInputState;
};

const useInput = (validateValue) => {
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState('');
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    // inferred states:
    // const valueIsValid = validateValue(enteredValue);
    // const hasError = !enteredValue && isTouched;
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        // setEnteredValue(event.target.value);
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const inputBlurHandler = event => {
        // setIsTouched(true);
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
        // setEnteredValue('');
        // setIsTouched(false);
        dispatch({type: 'RESET'});
    };

    // return {
    //     value: enteredValue,
    //     isValid: valueIsValid,
    //     hasError,
    //     valueChangeHandler,
    //     inputBlurHandler,
    //     reset
    // };
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
