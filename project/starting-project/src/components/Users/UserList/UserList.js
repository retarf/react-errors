import React from "react";

import UserItem from '../UserItem/UserItem';


const UserList = props => {
    return (
        <ul>
            {props.items.map(
                user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        user={user}
                    >
                        {user.name}
                    </UserItem>
                )
            )}
        </ul>
    )
};

export default UserList;

