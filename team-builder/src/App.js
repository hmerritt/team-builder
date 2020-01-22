import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members/Members';

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

            {/* List team members */}
            <Members teamMembers={teamMembers} />
        </div>
    );
}

export default App;
