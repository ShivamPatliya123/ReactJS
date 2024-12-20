import React,{useContext} from 'react'
import UserConext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserConext)

    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
  
}

export default Profile