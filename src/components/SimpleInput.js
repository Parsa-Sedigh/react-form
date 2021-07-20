import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
    const [enteredNameTouched, setEnteredNameTouched] = useState();
    // const nameInputRef = useRef();
    // const [formIsValid, setFormIsValid] = useState(false);

    // useEffect(() => {
    //     console.log('Name input is valid!');
    // }, [enteredNameIsValid]);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
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

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);

        // if (enteredName.trim() !== '') {
        //     setEnteredNameIsValid(true);
        // }
    };

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);

        // if (enteredName.trim() === '') {
        //     setEnteredNameIsValid(false);
        // }
    };

    const formSubmissionHandler = event => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        // setEnteredNameIsValid(true);

        // const enteredValue = enteredName.current.value;
        // console.log(enteredValue);

        // nameInputRef.current.value = '';  Not ideal, don't manipulate the DOM. Instead write: setEnteredName('');
        setEnteredName('');
        setEnteredNameTouched(false);
    };


    const nameInputClasses = enteredNameIsValid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    // ref={nameInputRef}
                    value={enteredName}
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}/>
                {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
