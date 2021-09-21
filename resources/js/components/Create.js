import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link,useHistory } from "react-router-dom";
import CardTemplate from './CardTemplate';



export const Create = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/users', {
            name, email, password
        }).then((response) => {
            console.log(response);
            if(response.status == 200){
                history.push('/');
            }
        }).catch(error => {
            setErrors(Object.values(error.response.data.errors));
        });
    }

    return (
        <CardTemplate title="Create new user">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" placeholder="Name" id="name" onChange={e => setName(e.target.value)} />
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={e => setPassword(e.target.value)} />
                <button className="create-button" style={{marginTop: '5px', padding: '5px'}}>Create</button>
            </form>
            {errors && errors.map(item => <li className="error" key={item}> {item} </li>)}
        </CardTemplate>
    );
}
