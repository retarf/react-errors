import React from "react";
import {useState} from "react";
import Button from '../UI/Button';

import classes from './AddUser.module.css';
import Card from '../UI/Card';


const AddUser = (props) => {

    const [nameEnteredValue, setNameEnteredValue] = useState('');
    const [ageEnteredValue, setAgeEnteredValue] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (event.target.value.trim().length > 0) {
            setNameIsValid(true);
        }
        ;
        setNameEnteredValue(event.target.value);
    };

    const ageInputChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setAgeIsValid(false);
        }
        ;
        setAgeEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (nameEnteredValue.trim().length === 0) {
            setNameIsValid(false);
            return;
        }
        ;

        if (ageEnteredValue.trim().length === 0) {
            setAgeIsValid(false);
            return;
        }
        ;

        props.onAddUser(nameEnteredValue, ageEnteredValue);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Name:</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age:</label>
                <input id="age" type="number"/>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;