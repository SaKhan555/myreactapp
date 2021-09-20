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
// import { render } from 'sass';

class User extends React.Component {
    state = {
        users: [],
    }

    // fetchUsers = async () => {
    //     const res = await axios.get("api/users");
    //     if (res.status === 200) {
    //         this.setState({ users: res.data.users });
    //     }
    // }

    // componentDidMount() {
    //     this.fetchUsers();
    // }
    render() {
        return (
            <div>
                <Router>
                    {/* <Switch> */}

                        <Navbar />
                        {/* <Route exact path="/" component={Card} />
                        <Route exact path="/users/create" component={Create} /> */}
                    {/* </Switch> */}
                    {/* <Card users={this.state.users} /> */}
                </Router>
            </div>
        );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<User />, document.getElementById('root'));
}
