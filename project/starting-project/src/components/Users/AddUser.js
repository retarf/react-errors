import React from "react";
import {useState, useRef} from "react";
import Button from '../UI/Button';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Handlers/Wrapper";


const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input.',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        ;
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age.',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }
        ;
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Name:</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age:</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;