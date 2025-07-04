import React from 'react'
import Button from '../components/Button';
import {ModeContext} from '../components/ModeContext';
import { useContext } from 'react';

export default function TimerControls() {
  {/*We destructure the object useContext(ModeContext) pass back, aiming only the ModesStyles element*/}
  const {ModesStyles} = useContext(ModeContext);
  const {setpomodoro: setTheme,
         ispomodoro: currentTheme
  } = useContext(ModeContext);

  function changeMode() {
    setTheme(!currentTheme)
  };
  return (
    <div className='timerControls_Pomodoro'>
      {/*We apply the logic of ModeContext here, accordin to the mode provided (either pomodoro or break),
      we pass the prop {style} down to the button component, that applies it to the button itself*/}
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {!currentTheme ? changeMode: null}>
        Timer
      </Button>
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {currentTheme ? changeMode: null}>
        Break
      </Button>
      <Button buttonClass={'timerControls'} style={{background: ModesStyles.buttons.background}} onClick = {currentTheme ? changeMode: null}>
        Long Break
      </Button>
    </div>
  )
}
