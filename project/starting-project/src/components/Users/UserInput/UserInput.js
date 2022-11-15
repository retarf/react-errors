import React from "react";
import {useState} from "react";
import Button from '../../UI/Button/Button';

import styles from './UserInput.module.css';


const UserInput = props => {

    const [nameEnteredValue, setNameEnteredValue] = useState('');
    const [ageEnteredValue, setAgeEnteredValue] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const nameInputChangeHandler = (event) => {
         if (event.target.value.trim().length > 0) {
             setNameIsValid(true);
         };
         setNameEnteredValue(event.target.value);
    };

    const ageInputChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setAgeIsValid(false);
        };
        setAgeEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (nameEnteredValue.trim().length === 0) {
            setNameIsValid(false);
            return;
        };

        if (ageEnteredValue.trim().length === 0) {
            setAgeIsValid(false);
            return;
        };

        props.onAddUser(nameEnteredValue, ageEnteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler} >
            <div className={`${styles["form-control"]} ${!nameIsValid && styles.invalid} ${!ageIsValid && styles.invalid}`}>
                <label>Name:</label>
                <input type="text" onChange={nameInputChangeHandler}/>
                <label>Age:</label>
                <input type="text" onChange={ageInputChangeHandler} />
            </div>
            <Button type="submit">Add user</Button>
        </form>
    )
}

export default UserInput;