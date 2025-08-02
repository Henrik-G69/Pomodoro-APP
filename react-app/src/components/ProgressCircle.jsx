import React, { useContext, useEffect, useMemo, useState } from 'react'
import { TimerContext } from './TimerContext'

function ProgressCircle() {
  const {ModesStyles, pomodoroTime, breaktime, currentTimer, isPomodoro} = useContext(TimerContext)
  const timeSet = isPomodoro ? pomodoroTime : breaktime
  const circleStroke = 2 * Math.PI * 90
  const [currentStroke, setCurrentStroke] = useState(circleStroke)
  const TimePercentage = useMemo(() => {
    return ((currentTimer * 100)/ timeSet)
  }, [currentTimer]) 

  useEffect(() => {
    setCurrentStroke((circleStroke * (100 - TimePercentage))/100)
  },[currentTimer, circleStroke, TimePercentage])

  console.log('Tempos padrão: ' + timeSet + ' Tempo Atual: ' + currentTimer + ' Porcentagem Atual: ' + TimePercentage 
    + ' Stroke Atual: ' + currentStroke
  )
  return (
    <svg width={200} height={200}>
        <g transform='scale(-1,1) translate(-200,0)'>
            <circle r="90" fill='transparent' cx={100} cy={100} stroke = {ModesStyles.buttons.background} 
            strokeWidth={3.2} strokeDasharray={circleStroke} strokeDashoffset={currentStroke} rotate={50} ></circle>
        </g>
    </svg>
  )
}

export default ProgressCircle