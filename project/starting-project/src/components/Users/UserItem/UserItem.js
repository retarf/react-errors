import React from "react";


const UserItem = props => {

    const getContent = () => {
        return props.user.name.concat(" (").concat(props.user.age).concat("years old)")
    };

    return <li>
        {getContent()}
    </li>
}

export default UserItem;