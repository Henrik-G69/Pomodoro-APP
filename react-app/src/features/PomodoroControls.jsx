import React from 'react'
import Button from '../components/Button'
import RefreshArrowIcon from '../assets/icons/refresh-arrow.svg'
import PlayIcon from '../assets/icons/play.svg'
import StopIcon from '../assets/icons/stop.svg'
import SettingsIcon from '../assets/icons/settings.svg'
import { ModeContext } from '../components/ModeContext'
import { useContext } from 'react'

export default function PomodoroControls() {
  const {ispomodoro: currentMode,
         ModesStyles: currentStyle,
         setpomodoro: setMode 
        } = useContext(ModeContext);
  function changeMode(){
    setMode(!currentMode)
  }
  return (
    <div className='PomodoroControls'>
      <Button buttonClass='PomodoroControlsbutton' style={{background: currentStyle.buttons.background}}>
        <img src={RefreshArrowIcon} alt="refresh pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button buttonClass='PomodoroControlsbutton' specifId='middleButton' style={{background: currentStyle.buttons.background}}
      onClick={changeMode}>
        <img src={currentMode ? StopIcon : PlayIcon} alt="start pomodoro" className='PomodoroControlsImg'/>
      </Button>
      <Button buttonClass='PomodoroControlsbutton' style={{background: currentStyle.buttons.background}}>
        <img src={SettingsIcon} alt="pomodoro settings" className='PomodoroControlsImg'/>
      </Button>
    </div>
  )
}
