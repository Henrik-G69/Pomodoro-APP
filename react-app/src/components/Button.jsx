import React from 'react'

export default function Button({buttonClass, specifId, children, style, onClick}) {
  return (
    <button id={specifId} className={buttonClass} style={style} onClick={onClick}>{children}</button>
  )
}