import React, {useState} from 'react';
import {UserMutation, Users} from "../../types";

interface Props {
    onSubmit: (user: Users) => void
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        role: '',
        active: false
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onFormSubmit =(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...user
        });
        const userCopy = user;
        userCopy.name = '';
        userCopy.email = '';
        setUser(userCopy);
        const box = document.getElementById('active') as HTMLInputElement;
        box.checked = false;
    };

    const changeActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }));
    };

    return (
        <form className='col-5' onSubmit={onFormSubmit}>
            <h4>Add new User:</h4>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                    required
                    value={user.name}
                    onChange={changeUser}
                />
                <label htmlFor='email' className='mt-3'>Email: </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control mb-3'
                    required
                    value={user.email}
                    onChange={changeUser}
                />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <label htmlFor='role'>User role: </label>
                        <select className='mx-2' id='role' name='role' onChange={changeUser} required>
                            <option value=''>--select role--</option>
                            <option value='user'>User</option>
                            <option value='admin'>Admin</option>
                            <option value='editor'>Editor</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='active' className='me-2'>Active</label>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            name='active'
                            id='active'
                            onChange={changeActive}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary d-block'>Add user</button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;