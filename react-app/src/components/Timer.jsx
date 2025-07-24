import React, { useContext, useState } from 'react'
import { TimerContext } from './TimerContext'
import { IsPlayingContext } from './IsPlayingContext';
import EditingDiv from './EditingDiv'

export default function Timer({isActive}) {
  const {currentTimer, setTimer} = useContext(TimerContext);
  let [Minutes, setMinutes] = useState('0')
  let [Seconds, setSeconds] = useState('0')
  let [TotalTime, setTotalTime] = useState('0')
  function formatTimer(){
    Minutes = setMinutes(currentTimer.slice(0,-2))
    Seconds = setSeconds(currentTimer.slice(-2))
    (Minutes.length() < 2 ? Minutes = '00' : {})
    TotalTime = (parseInt(Minutes, 10) * 60 * 1000) + (parseInt(Seconds, 10) * 1000)
  }
  formatTimer()
  console.log(TotalTime)
  function Timer(){
  };
  console.log('Timer atual ' + currentTimer)
  return (
    <div className='Timer'>
      <EditingDiv divclass='timerCount' content={`${Minutes}:${Seconds}`} changecontent={setTimer} maxlength={5} ></EditingDiv>
    </div>
  )
}
