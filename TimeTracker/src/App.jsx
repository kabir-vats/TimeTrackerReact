import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ActivitiesDisplay from './ActivitiesDisplay'
import UsernameInput from './Login'
function App() {
  const [userIDLoaded, setUserIDLoaded] = useState((false))
  const [userID, setUserID] = useState("652e19c767289a75d06ffaee")
  console.log("hello")


  return (
    <>
      <div>
        {UsernameInput(setUserIDLoaded, setUserID)}
      </div>
      <div className="card">
        {ActivitiesDisplay(userIDLoaded, userID)}
      </div>
    </>
  )
}

export default App
