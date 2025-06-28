import React,{useState} from 'react'
import { ModeProvider } from "./components/ModeContext"
import PomodoroTimer from './features/PomodoroTimer'

function App() {

  return (
    <ModeProvider>
      <>
        <PomodoroTimer></PomodoroTimer>
       </>
      </ModeProvider>
  )
}

export default App
