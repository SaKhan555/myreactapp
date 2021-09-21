import { useState, useEffect } from 'react';
import CardTemplate from "./CardTemplate";

const Edit = (props) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState([]);
    const [isPending, setIsPending] = useState(true);
    let id = props.match.params.id
    const fetchUsers = async () => {
        const res = await axios.get("/api/users/edit/" + id);
        if (res.status === 200) {
            setUser(res.data.user);
            setIsPending(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <CardTemplate title="Update User">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" placeholder="Name" id="name" value={user.name} onChange={e => setName(e.target.value)} />
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" placeholder="Enter email" id="email" value={user.email} onChange={e => setName(e.target.value)} />
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwd" onChange={e => setName(e.target.value)} />
                <button className="create-button" style={{ marginTop: '5px', padding: '5px' }}>Update</button>
            </form>
        </CardTemplate>
    );
}

export default Edit
