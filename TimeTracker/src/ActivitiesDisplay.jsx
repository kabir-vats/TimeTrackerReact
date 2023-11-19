import {useEffect, useState} from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
const API_URL = "http://localhost:8080/api"
const ACTIVITIES_EXTENSION = "/activities"
import ActivityButton from './components/ActivityButton'
const userID_EXTENSION = "/userID"
const END_SLASH = "/" 

export async function loadActivities(userID) {
    console.log(API_URL + ACTIVITIES_EXTENSION + userID_EXTENSION + END_SLASH + userID)
    const response = await fetch(API_URL + ACTIVITIES_EXTENSION + userID_EXTENSION + END_SLASH + userID)
    const activities = await response.json();
    console.log(await activities)
    return await activities
}

export default function ActivitiesDisplay(userIDLoaded, userID, popupOpen) {
    const[activities, setActivities] = useState([]);
    useEffect(() => {
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
    }, [userIDLoaded, popupOpen]);
    
    if (userIDLoaded) {
        const activityButtons = activities.map(activity => ActivityButton(activity))
        return (
                <ButtonGroup>
                    {activityButtons}
                </ButtonGroup> 
            )
    }
}

