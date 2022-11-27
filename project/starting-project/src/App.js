import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList/UserList'

import styles from './App.module.css';

const App = () => {

    const [Users, setUsers] = useState([]);

    const addUser = (UserName, UserAge) => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers.unshift({name: UserName, age: UserAge, id: Math.random().toString()})
            return updatedUsers
        });
    };

    const delUser = userId => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers.filter(user => user.id !== userId);
        });
    };

    return (
        <div className={`${styles['main']}`}>
            <div className={`${styles['container']}`}>
                <section id="user-form">
                    <AddUser onAddUser={addUser}/>
                </section>
                <section id="users">
                    <UserList items={Users}/>
                </section>
            </div>
        </div>
    );
};

export default App;
