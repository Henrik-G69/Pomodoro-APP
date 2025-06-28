import React from 'react'

export default function Button({buttonClass, specifId, children}) {
  return (
    <button id={specifId} className={buttonClass}>{children}</button>
  )
}