import React from 'react'
import ProgressCircle from './ProgressCircle'

export default function PomodoroImage({ImgSrc}) {
  return (
    <div className='PomodoroIcon'>
      <ProgressCircle></ProgressCircle>
        <img src={ImgSrc}/>
        <div className='PomodoroIcon_shadow'></div>
    </div>
  )
}
