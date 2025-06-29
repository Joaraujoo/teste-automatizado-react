import axios from "axios";
import { useEffect, useState } from "react"

interface UsersProps{
    id:number;
    name: string;
    username: string;
    email: string;

}


export function Posts(){

    const [users, setUsers] = useState<UsersProps[]>([])

    useEffect(() => { 
        async function loadUsers(){
             const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        }
        loadUsers()
    }, [])

    async function handleGetUsers(){

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
    }

    return(
        <div>
            <button onClick={handleGetUsers}>Buscar usúarios</button>

            {users && users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <strong>user: {user.email}</strong>
                </div>
            ))}
        </div>
    )
}