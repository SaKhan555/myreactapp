import axios from 'axios';
import { error } from 'jquery';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CardTemplate from './CardTemplate';



export const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/users', {
            name, email, password
        }).then(function (response) {
            setMessage(response.message);
        }).catch(error => {
            setErrors(Object.values(error.response.data.errors));
        });
    }
    let items = errors.map(item => <li key={item}>{item}</li>);

    return (
        <CardTemplate title="Create new user">
            <div className="col-md-6">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" placeholder="Name" id="name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary">Create User</button>
                </form>
                    <ul className="alert alert-danger position-fixed" style={{listStyle: 'none',fontWeight: '600',color: 'red'}}>{items}</ul>
            </div>
        </CardTemplate>
    );
}
