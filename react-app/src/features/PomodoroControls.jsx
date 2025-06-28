import React from 'react'
import Button from '../components/Button'

export default function PomodoroControls() {
  return (
    <div className='PomodoroControls'>
      <Button className='PomodoroControlsbutton'>
        <img src="../assets/icons/refresh-arrow.svg" alt="refresh pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button className='PomodoroControlsbutton' id='middleButton'>
        <img src="../assets/icons/play.svg" alt="start pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button className='PomodoroControlsbutton'>
        <img src="../assets/icons/settings.svg" alt="pomodoro settings" className='PomodoroControlsImg'/>
      </Button>
    </div>
  )
}
