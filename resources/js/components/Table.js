import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button } from './Button';
import useData from './useData';






export const Table = (props) => {

    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);

    const fetchUsers = async () => {
        const res = await axios.get("api/users");
        if (res.status === 200) {
            setUsers(res.data.users);
            setIsPending(false);
        }
    }

    useEffect(() => {
       setTimeout(() => {
        fetchUsers();
       }, 2000); 
    }, []);

 

    return (
        <div className="blog-list">
        {isPending && <h3>Loading...</h3>}
            {users.map(user => (
                <div className="blog-preview" key={user.id} >
                    <h2>{user.name} {user.email} <Link to={"/users/edit/"+user.id} className="create-button">Edit</Link></h2>     
                </div>
            ))}
        </div>
    );
}