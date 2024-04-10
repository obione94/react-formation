import useUsers from "./Users";

function Content  () 
{
    const [users,loading] = useUsers()

    function displayUsers() {
        return users.map((u) => <li key={u.id}>{u.name}</li> )
    }

    return(
        <div>
           <h2>Liste des utilisateur</h2>
           {loading ? <p>chargement</p>: displayUsers()}
        </div>
    );

};

export default Content;