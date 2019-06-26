import React from 'react'

import './Button.scss'

export const Button =({
  onClick,
  className,
  type,
  children,
})=>
  <button
      onClick ={onClick}
      className={className}
      type={type}
  >
      {children}
  </button>
