import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-gray-600',
    textColor = text-white,
    className = '',
    ...props
 
}) { 
  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button