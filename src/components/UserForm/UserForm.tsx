import React from 'react';

const UserForm: React.FC = () => {
    return (
        <form className='col-5'>
            <h4>Add new User:</h4>
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                />
                <label htmlFor='email' className='mt-3'>Email: </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control mb-3'
                />
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <label htmlFor='role'>User role: </label>
                        <select className='mx-2' id='role' name='role'>
                            <option>user</option>
                            <option>admin</option>
                            <option>editor</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='active' className='me-2'>Active</label>
                        <input
                            type='checkbox'
                            name='active'
                            id='active'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary d-block'>Add user</button>
                </div>
            </div>
        </form>
    );
};

export default UserForm;