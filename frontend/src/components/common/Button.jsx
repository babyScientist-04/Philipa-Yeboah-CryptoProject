import React from 'react'
import classNames from 'classnames'

const Button = ({primary, secondary, children}) => {
  const buttonClass = classNames(
    "rounded-full font-coinbase-sans px-8 py-4 text-base font-semibold text-white flex items-center justify-center",
    {
      "bg-(--primary) hover:bg-blue-700": primary,
      "bg-black hover:bg-black/80 ":secondary
    }
  )
  return (
    <button className={buttonClass}>
      {children}
    </button>
  )
}

export default Button