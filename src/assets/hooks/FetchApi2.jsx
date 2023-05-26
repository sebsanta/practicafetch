import { useState, useEffect } from "react";


const FetchApi2 = () => {

    
    //https://jsonplaceholder.typicode.com/users
    const [cont, setCont] = useState(0);
    const [users, setUsers] = useState([]);

 

    useEffect(() =>{
        async function fetchData(){

            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        }
       fetchData();
    },[]);

    const contador = () => {
            setCont(cont+1);
        }

    return (
    <div>
        <h1>
            Fetch APi 2
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

export default FetchApi2;