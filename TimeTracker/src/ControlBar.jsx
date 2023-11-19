import { useState, useEffect } from "react";
const API_URL = "http://localhost:8080/api"
const ACTIVITIES_EXTENSION = "/activities"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import CreateActivityDialog from "./components/CreateActivityWindow";

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




/*
function DeleteActivity() {
    return (
        <button onClick={}>
            Delete Activity
        </button>
    )
}*/

