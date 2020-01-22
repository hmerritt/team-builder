import React, { useState } from 'react';
import './Form.css';

function Form({ teamMembers, setTeamMembers })
{

    //  Form input state -> individual member
    const [member, setMember] = useState({});

    //  Handle form input changes
    const handleChanges = e =>
    {
        setMember({ ...member, [e.target.id]: [e.target.value] });
    }

    const addMember = e =>
    {
        e.preventDefault();
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
                        <option value='' disabled selected>Roll</option>
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
