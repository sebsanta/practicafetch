import { useState, useEffect } from "react";


const FetchApi = () => {

    //https://jsonplaceholder.typicode.com/users
    const [cont, setCont] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(data => {
            setUsers(data);
        })
    },[]);

    const contador = () => {
            setCont(cont+1);
        }
    return (
    <div>
        <h1>
            Fetch APi
        </h1>
        <button onClick={contador}>contador: {cont}</button>
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
    )

}

export default FetchApi;