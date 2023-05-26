import { useState, useEffect, useCallback } from "react";


const FetchApi3 = () => {

    //https://jsonplaceholder.typicode.com/users
    const [cont, setCont] = useState(0);
    const [users, setUsers] = useState([]);

    //console.log('app');
    
    const fetchData = useCallback(
        async () =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        },[])


    useEffect(() =>{
        fetchData();
    },[]);

    const contador = () => {
            setCont(cont+1);
        }

    return (
    <div>
        <h1>
            Fetch APi 3
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

export default FetchApi3;