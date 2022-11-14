import React from "react";
import Button from '../../UI/Button/Button';


const UserInput = props => {
    return (
        <form>
            <div>
                <label>Name:</label>
                <input type="text"/>
                <label>Age:</label>
                <input type="text"/>
            </div>
            <Button>Add user</Button>
        </form>
    )
}

export default UserInput;