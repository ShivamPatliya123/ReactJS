import React from "react";

import UserConext from "./UserContext";

const UserConxtProvider = ({children})=>{
    const[user,setUser] = React.useState(null)
    return (
        <UserConext.Provider value={{user,setUser}}>
            {children}
        </UserConext.Provider>
    )
}

export default UserConxtProvider