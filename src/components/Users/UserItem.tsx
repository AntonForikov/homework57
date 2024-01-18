import React from 'react';

interface Props {
    name: string,
    email: string,
    active: boolean,
    role: string
}
const UserItem: React.FC <Props> = ({name, email, active, role}) => {
    return (
        <div>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
            <span>{active ? 'Active user' : 'Unactive user'}</span>
            <span>User Role: {role}</span>
        </div>
    );
};

export default UserItem;