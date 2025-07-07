import React, { useContext } from 'react'
import { TimerContext } from './TimerContext'
import EditingDiv from './EditingDiv'

export default function Timer() {
  const {currentTimer, setTimer} = useContext(TimerContext);
  return (
    <div className='Timer'>
      <EditingDiv divclass='timerCount' content={currentTimer} changecontent={setTimer} maxlength={4}></EditingDiv>
    </div>
  )
}
