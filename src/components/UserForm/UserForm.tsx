import React from 'react';

const UserForm: React.FC = () => {
    return (
        <form>
            <h4>Add new User</h4>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                />
            </div>
        </form>
    );
};

export default UserForm;