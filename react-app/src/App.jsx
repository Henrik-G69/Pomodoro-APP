import React,{useState} from 'react'
import PomodoroTimer from './features/PomodoroTimer'
import Pomodoro from './features/Pomodoro'
import {ModeProvider} from './components/ModeContext'
import { TaskProvider } from './components/TaskContext'
import { TimerProvider } from './components/TimerContext'
import { IsPlayingProvider } from './components/IsPlayingContext'

function App() {

  return (
    <IsPlayingProvider>
    <TimerProvider>
    <TaskProvider>
    <ModeProvider>
      <div className='App_Container'>
        <Pomodoro></Pomodoro>
        <PomodoroTimer></PomodoroTimer>
       </div>
    </ModeProvider>
    </TaskProvider>
    </TimerProvider>
    </IsPlayingProvider>
  )
}

export default App
