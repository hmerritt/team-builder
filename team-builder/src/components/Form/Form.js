import React, { useState } from 'react';
import './Form.css';

function Form({ teamMembers, setTeamMembers })
{

    //  Form input state -> individual member
    const [member, setMember] = useState({
        name: '',
        email: '',
        roll: 'Frontend Developer'
    });

    //  Handle form input changes
    const handleChanges = e =>
    {
        setMember({ ...member, [e.target.id]: e.target.value });
    }

    //  Add a new member
    const addMember = e =>
    {
        //  Prevent page reloading
        e.preventDefault();

        //  Add new member to teamMembers list
        setTeamMembers([...teamMembers, member]);
    }

    return (
        <div className='members--add'>
            <form onSubmit={addMember}>
                <label htmlFor='name'>
                    <h4>Name</h4>
                    <input
                        type='text'
                        name='fullname'
                        id='name'
                        placeholder='Name'
                        onChange={handleChanges}
                        required
                    />
                </label>
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                        onChange={handleChanges}
                        required
                    />
                </label>
                <label htmlFor='roll'>
                    <h4>Roll</h4>
                    <select
                        type='text'
                        name='roll'
                        id='roll'
                        onChange={handleChanges}
                    >
                        <option value='Frontend Developer'>Frontend Developer</option>
                        <option value='Backend Developer'>Backend Developer</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>
                <button> Add new member </button>
            </form>
        </div>
    )
}

export default Form;
