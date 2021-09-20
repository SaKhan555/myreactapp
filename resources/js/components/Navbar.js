import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Card } from './Card';
import { Create } from './Create';

export const Navbar = () => {
    return (
        <div>
            {/* <Router> */}
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </nav>
            <Switch>
                <Route exact path="/" component={Card} />
                <Route exact path="/users/create" component={Create} />
            </Switch>
            {/* </Router> */}
        </div>
    );
}
