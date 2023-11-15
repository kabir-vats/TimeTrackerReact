import {useEffect, useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
const API_URL = "http://localhost:8080/api"
const ACTIVITIES_EXTENSION = "/activities"
const LOG_EXTENSION = "/startLogs"
const userID_EXTENSION = "/userID"
const END_SLASH = "/" 

export async function loadActivities(userID) {
    console.log(API_URL + ACTIVITIES_EXTENSION + userID_EXTENSION + END_SLASH + userID)
    const response = await fetch(API_URL + ACTIVITIES_EXTENSION + userID_EXTENSION + END_SLASH + userID)
    const activities = await response.json();
    console.log(await activities)
    return await activities
}

export default function ActivitiesDisplay(userIDLoaded, userID) {
    const[activities, setActivities] = useState([]);
    useEffect(() => {
            console.log("made it")
            if (userIDLoaded) {
                let mounted = true;
                loadActivities(userID)
                    .then(items => {
                        if(mounted) {
                            setActivities(items)
                        }
                    })
                return () => mounted = false;
            }
    }, [userIDLoaded]);
    
    if (userIDLoaded) {
        const activityButtons = activities.map(activity => ActivityButton(activity))
        return (
            <ButtonGroup>
                {activityButtons}
            </ButtonGroup> 
            )
    }
}

export function ActivityButton(activity) {
    
    async function logActivity() {
        
        let logJson = {
            'userID': activity.userID,
            'activityID': activity.id
        }
        const response = await fetch(API_URL+LOG_EXTENSION, {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json;charset=UTF-8'
            },
            method: 'POST',
            body: JSON.stringify(logJson)
        })
        const returnedLog = await response.json()
        console.log(await returnedLog)
    }
    return (
        <button onClick={logActivity}>
            {activity.title}
        </button>
    )
}

