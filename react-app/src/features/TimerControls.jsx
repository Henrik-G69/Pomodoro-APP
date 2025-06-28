import React from 'react'
import Button from '../components/Button'

export default function TimerControls() {
  return (
    <div className='timerControls_Pomodoro'>
      <Button buttonClass={'timerControls'}>
        Timer
      </Button>
      <Button buttonClass={'timerControls'}>
        Break
      </Button>
      <Button buttonClass={'timerControls'}>
        Long Break
      </Button>
    </div>
  )
}
