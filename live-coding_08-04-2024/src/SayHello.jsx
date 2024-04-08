import { useState } from "react";

function SayHello ({}) {

    const user = [
        {
            name:"toto",
            age: 12,
            id: 1,
        },
        {
            name:"toto",
            age: 55,
            id: 1,
        },
        {
            name:"tutu",
            age: 34,
            id: 1,
        }
    ];

    const [users, setUsers] = useState(user);


    function deleted (i) {
        const newuser = [...users];
        newuser.splice(i, 1);
        setUsers(newuser);
    }

    return <div>
        {
            users.map(
                (u,i) => 
                <li key={u.id}>
                    {u.name} - {u.age} ans
                    <button onClick={() =>deleted(i)} > sup</button>
                </li>
            )
        }
    </div>
}


export default SayHello