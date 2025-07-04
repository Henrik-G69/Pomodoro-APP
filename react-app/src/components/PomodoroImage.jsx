import React from 'react'

export default function PomodoroImage({ImgSrc}) {
  return (
    <div className='PomodoroIcon'>
        <img src={ImgSrc}/>
        <div className='PomodoroIcon_shadow'></div>
    </div>
  )
}
