import { useEffect, useState } from "react";

function Users() 
{
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    async function init() {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await reponse.json()
        setLoading(false)
        setUsers(json)
    }

    useEffect(
        ()=>{ 
            
            return() => (init())
            
        },[]
    )
   
    return [loading,users]
};

export default Users;