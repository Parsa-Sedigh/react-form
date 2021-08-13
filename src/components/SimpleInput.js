import {useEffect, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    // const [enteredNameTouched, setEnteredNameTouched] = useState();
    // const nameInputRef = useRef();
    // const [formIsValid, setFormIsValid] = useState(false);

    // useEffect(() => {
    //     console.log('Name input is valid!');
    // }, [enteredNameIsValid]);
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    let formIsValid = false;

    // useEffect(() => {
    //     if (enteredNameIsValid) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false);
    //     }
    // }, [enteredNameIsValid]);
    if (enteredNameIsValid) {
        formIsValid = true;
    }

    // const nameInputChangeHandler = event => {
    //     setEnteredName(event.target.value);
    //
    //     // if (enteredName.trim() !== '') {
    //     //     setEnteredNameIsValid(true);
    //     // }
    // };

    // const nameInputBlurHandler = event => {
    //     setEnteredNameTouched(true);
    //
    //     // if (enteredName.trim() === '') {
    //     //     setEnteredNameIsValid(false);
    //     // }
    // };

    const formSubmissionHandler = event => {
        event.preventDefault();
        // setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        // setEnteredNameIsValid(true);

        // const enteredValue = enteredName.current.value;
        // console.log(enteredValue);

        // nameInputRef.current.value = '';  Not ideal, don't manipulate the DOM. Instead write: setEnteredName('');
        // setEnteredName('');
        // setEnteredNameTouched(false);
        resetNameInput();
        resetEmailInput();
    };


    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    // ref={nameInputRef}
                    value={enteredName}
                    type='text'
                    id='name'
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}/>
                {nameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>

            <div className={nameInputClasses}>
                <label htmlFor='name'>Your E-Mail</label>
                <input
                    // ref={nameInputRef}
                    value={enteredEmail}
                    type='text'
                    id='name'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}/>
                {emailInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
