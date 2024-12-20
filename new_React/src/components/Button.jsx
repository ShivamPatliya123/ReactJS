import React from 'react'

function Button(props) {
    
  return (
    <div>
        {props.children}
        <button onClick={props.handleClick}>
            Click Me
        </button>
    </div>
  )
}

export default Button