import { useState } from 'react';

import UserForm from "./components/UserForm/UserForm";
import User from "./components/Users/User";
import {Users} from "./types";

function App() {
    const [users, setUsers] = useState<Users[]>([
        {
            id: Math.random().toString(),
            name: 'Test user',
            email: 'test@user.com',
            active: false,
            role: 'user'
        }
    ]);

    const addUser = (user: Users) => {
        setUsers(prevState => [...prevState, user]);
    };

    return (
        <div className='row p-3 justify-content-between'>
            <UserForm onSubmit={addUser} />
            <User users={users} />
        </div>
    );
}

export default App;
