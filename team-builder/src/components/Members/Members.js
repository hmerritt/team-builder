import React, { useState } from 'react';
import './Members.css';

function Members({ teamMembers })
{
    return (
        <div className='team-members'>
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
    )
}

export default Members;
