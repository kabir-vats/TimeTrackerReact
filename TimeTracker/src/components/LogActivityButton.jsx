const LOG_EXTENSION = "/startLogs"
const API_URL = "http://localhost:8080/api"



export default function ActivityButton(activity) {
    async function postTask() {
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
        <button onClick={postTask}>
            {activity.title}
        </button>
    )
}

