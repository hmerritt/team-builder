import React, { useState } from 'react';
import './Form.css';

function Form({ setTeamMembers })
{
    return (
        <div className='members--add'>
            <form>
                <label htmlFor='name'>
                    <h4>Name</h4>
                    <input  type='text' name='fullname' />
                </label>
                <label htmlFor='email'>
                    <h4>Email</h4>
                    <input  type='text' name='email' />
                </label>
                <label htmlFor='roll'>
                    <h4>Roll</h4>
                    <select type='text' name='roll'>
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
