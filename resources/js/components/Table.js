import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button } from './Button';




export const Table = (props) => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get("api/users");
        if (res.status === 200) {
            setUsers(res.data.users);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created_at}</td>
                            <td className="">
                                    <Link className="btn btn-primary" to={`/edit/${users.id}`}>Edit</Link>
                                    {/* <Link className="btn btn-danger">Delete</Link> */}
                                    
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}