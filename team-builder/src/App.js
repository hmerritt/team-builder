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
        roll: 'Frontend Developer'
    }]);

    return (
        <div className="App">
            <header>
                <div className="container">
                    <h1>Team Members ({teamMembers.length})</h1>
                </div>
            </header>

            <div className='container'>
                {/* List team members */}
                <Members teamMembers={teamMembers} />

                {/* Form */}
                <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
            </div>
        </div>
    );
}

export default App;
