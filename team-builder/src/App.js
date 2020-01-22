import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members/Members';
import Form from './components/Form/Form';

function App()
{

    //  Team members state
    const [teamMembers, setTeamMembers] = useState([{
        name: 'John Doe',
        email: 'john@doe.com',
        roll: 'intern'
    }]);

    return (
        <div className="App">
            <header>
                <div className="container">
                    <h1>Team Members</h1>
                </div>
            </header>

            <div className='container'>
                {/* List team members */}
                <Members teamMembers={teamMembers} />

                {/* Form */}
                <Form setTeamMembers={setTeamMembers} />
            </div>
        </div>
    );
}

export default App;
