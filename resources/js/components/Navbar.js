import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Card } from './Card';
import { Create } from './Create';
import Edit from './Edit';

export const Navbar = () => {
    return (
        <div>
            {/* <Router> */}
            <nav className="navbar">
                <h1>MyApp</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/users/create" style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px'
                    }}>Create User</Link>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Card />
                </Route>
                <Route path="/users/create">
                    <Create />
                </Route>
                {/* <Route path="/users/edit/:id" >
                    <Edit />
                </Route> */}

                <Route exact path="/users/edit/:id" component={Edit} />
            </Switch>
            {/* </Router> */}
        </div>
    );
}
