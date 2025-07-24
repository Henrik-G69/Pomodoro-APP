import React from 'react'
import PomodoroControls from './PomodoroControls'
import PomodoroImage from '../components/PomodoroImage'
import SeedIcon from '../assets/icons/seed.png'
import PomodoroIcon from '../assets/icons/pomodoro.png'
import { ModeContext } from '../components/ModeContext'
import { IsPlayingContext } from '../components/IsPlayingContext'
import { useContext } from 'react'
import { useEffect } from 'react'

export default function Pomodoro() {
  const {ModesStyles: currentStyle,
         ispomodoro: currentMode,
         setpomodoro: changeMode
  } = useContext(ModeContext);

  const {isPlaying,
        setIsPlaying
  } = useContext(IsPlayingContext);

  {/*we set a timeout to changeMode so the user won't do it on a loop */}
  function pressSpace(e){
    if (e.key === ' '){
      e.preventDefault()
      setTimeout(() => {setIsPlaying(isPlaying => !isPlaying)},150)
    }
  }
  function pressShift(e){
    if (e.key === 'Shift'){
      e.preventDefault()
      setTimeout(() => {changeMode(currentMode => !currentMode)},150)
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', pressSpace);
    return () => {
      window.removeEventListener('keypress', pressSpace)
    }},
    [isPlaying, setIsPlaying]
  )
  useEffect(() => {
    window.addEventListener('keydown', pressShift);
    return () => {
      window.removeEventListener('keydown', pressShift)
    }},
    [currentMode, changeMode]
  )
  return (
    <div className='Pomodoro'>
     <PomodoroImage ImgSrc={currentMode ? PomodoroIcon: SeedIcon}></PomodoroImage>
     <PomodoroControls></PomodoroControls>
    </div>
  )
}
