import React, {useState} from 'react';
import UserInput from './components/Users/UserInput/UserInput';

import './App.css';

const App = () => {

    const [Users, setUsers] = useState();

    const addUser = newUser => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers.unshift({name: newUser.name, age: newUser.age, id: Math.random().toString()})
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
        <div>
            <section id="user-form">
                <UserInput />
            </section>
            <section id="users">
            </section>
        </div>
    );
};

export default App;
