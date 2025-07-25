import Timer from '../components/Timer'
import Task from '../components/Task'
import TimerControls from './TimerControls'
import MusicControls from './MusicControls'
import { ModeContext } from '../components/ModeContext'
import { useContext, useState } from 'react'
import { IsPlayingContext } from '../components/IsPlayingContext'

export default function PomodoroTimer() {
  const {isPlaying, setIsPlaying} = useContext(IsPlayingContext)
  const {ModesStyles} = useContext(ModeContext);
  return (
    <div className='Timer'>
      <Task style={{color: ModesStyles.buttons.background}} isActive = {isPlaying}></Task>
      <Timer></Timer>
      <TimerControls></TimerControls>
      <MusicControls></MusicControls>
    </div>
  )
}
