import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
            <div className="container">
                <header>
                    <h1>Team Members</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teamMembers.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td> {item.name} </td>
                                        <td> {item.email} </td>
                                        <td> {item.roll} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
