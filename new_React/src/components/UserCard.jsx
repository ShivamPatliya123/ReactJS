import React from 'react'
import card from '../assets/card.jpg'
import "./UserCard.css"
function UserCard(props) {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img src={card} alt="" id='user-img'/>
        <p id='user-desc'>Description of card</p>
    </div>
  )
}

export default UserCard