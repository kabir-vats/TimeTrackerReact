import { useState, useEffect } from "react";
const API_URL = "http://localhost:8080/api"
const ACTIVITIES_EXTENSION = "/activities"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

async function postActivity(userID, title) {
    let activityJson = {
        'userID': userID,
        'title': title
    }
    const response = await fetch(API_URL + ACTIVITIES_EXTENSION, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json;charset=UTF-8'
        },
        method: 'POST',
        body: JSON.stringify(activityJson)
    })
    const returnedLog = await response.json()
    return returnedLog
}

export default function ControlBar(userID, setPopupOpen, popupOpen, userIDLoaded) {
    const bar = [CreateActivityButton(userID, setPopupOpen, popupOpen)]
    if (userIDLoaded) {
        return(
            <ButtonGroup> 
                {bar}
            </ButtonGroup>
        )
    }
}

function CreateActivityButton(userID,setPopupOpen,popupOpen) {
    const handleClick = (() => {
        setPopupOpen(true)
    });
    return (
        <>
        <button onClick={handleClick}>
            Create Activity
        </button>
        {CreateActivityDialog(userID, setPopupOpen, popupOpen)}
        </>
    )
}

export function CreateActivityDialog(userID, setPopupOpen, popupOpen) {
    const[isOpen, setIsOpen] = useState(popupOpen)
    const[title, setTitle] = useState("")
    useEffect(() => {
        setIsOpen(popupOpen)
    },[popupOpen])
    const handleClick = (() => {
        setPopupOpen(false)
    });
    const handleSubmit = async(event) =>{
        event.preventDefault();
        postActivity(userID, title)
            .then(newActivity => 
                {
                    console.log(newActivity)
                    setPopupOpen(false)
                })
            
    }

    return(
        <dialog open = {isOpen}>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        name = "title"
                        type = "text"
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                    <button type="submit">
                        Create Activity
                    </button>
                </form>
                <button onClick={handleClick}>
                    Cancel
                </button>
            </div>
        </dialog>
    )
    
}


/*
function DeleteActivity() {
    return (
        <button onClick={}>
            Delete Activity
        </button>
    )
}*/

