import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';
import { Card } from './Card';
import axios from 'axios';
import { Create } from './Create';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class User extends React.Component {
    state = {
        users: [],
    }
    render() {
        return (
            <div className="App">
                <Router>
                        <Navbar />
                </Router>
            </div>
        );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<User />, document.getElementById('root'));
}
