import React from 'react';
import {Users} from "../../types";
import UserItem from "./UserItem";

interface Props {
    users: Users[]
}
const User: React.FC<Props>= ({users}) => {

    return (
        <div className='col-5'>
            <h4>Users:</h4>
            {users.map(user => (
                <UserItem name={user.name} email={user.email} active={user.active} role={user.role} key={user.id} />
            ))}
        </div>
    );
};

export default User;