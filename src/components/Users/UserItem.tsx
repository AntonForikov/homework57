import React from 'react';

interface Props {
    name: string,
    email: string,
    active: boolean,
    role: string
}
const UserItem: React.FC <Props> = ({name, email, active, role}) => {
    return (
        <div className='d-flex flex-column border ps-2 my-2'>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
            <span>Activity: {active ? 'Active' : 'Lazy'} user</span>
            <span>User Role: {role}</span>
        </div>
    );
};

export default UserItem;