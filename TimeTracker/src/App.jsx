import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ActivitiesDisplay from './ActivitiesDisplay'
import UsernameInput from './Login'
import ControlBar from './ControlBar'
function App() {
  //initial login useStates
  const [userIDLoaded, setUserIDLoaded] = useState((false))
  const [userID, setUserID] = useState("652e19c767289a75d06ffaee")

  //just to see renders
  console.log("hello")

  const [popupOpen, setPopupOpen] = useState(false)

  

  return (
    <>
      <div>
        {UsernameInput(setUserIDLoaded, setUserID, userIDLoaded)}
      </div>
      <div className="card">
        {ControlBar(userID, setPopupOpen, popupOpen, userIDLoaded)}
        {ActivitiesDisplay(userIDLoaded, userID, popupOpen)}
      </div>
    </>
  )
}

export default App
