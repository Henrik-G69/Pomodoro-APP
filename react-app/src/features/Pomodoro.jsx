import React from 'react'
import PomodoroControls from './PomodoroControls'
import PomodoroImage from '../components/PomodoroImage'
import SeedIcon from '../assets/icons/seed.png'
import PomodoroIcon from '../assets/icons/pomodoro.png'
import { ModeContext } from '../components/ModeContext'
import { useContext } from 'react'

export default function Pomodoro() {
  const {ModesStyles: currentStyle,
         ispomodoro: currentMode,
         setpomodoro: changeMode
  } = useContext(ModeContext)
  return (
    <div className='Pomodoro'>
     <PomodoroImage ImgSrc={currentMode ? PomodoroIcon: SeedIcon}></PomodoroImage>
     <PomodoroControls></PomodoroControls>
    </div>

  )
}
