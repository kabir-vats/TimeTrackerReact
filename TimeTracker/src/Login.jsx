import { useEffect, useState} from "react";
const API_URL = "http://localhost:8080/api"
const ACTIVITIES_EXTENSION = "/activities"
const LOG_EXTENSION = "/startLogs"
const USERS_EXTENSION = "/users"
const USERNAME_EXTENSION = "/username"
const END_SLASH = "/"

export default function UsernameInput(setUserIDLoaded, setExternalUserID) {
    const[username, setUsername] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault();
        await loadUserID(username)  
                .then(id =>{
                    console.log(id)
                    setExternalUserID(id)
                    setUserIDLoaded(true)
                })
    }
    return (    
        <form onSubmit ={handleSubmit}>
            <input 
                name = "username"
                type = "text"
                onChange = {(e) => setUsername(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    )
} 



export async function loadUserID(username) {
    console.log(API_URL + USERS_EXTENSION + USERNAME_EXTENSION + END_SLASH + username)
    const response = await fetch(API_URL + USERS_EXTENSION + USERNAME_EXTENSION + END_SLASH + username, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        })
    const users = await response.json()
    console.log(await users[0].id)
    return await users[0].id
}
