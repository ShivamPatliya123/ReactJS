import React from "react";

function Card({username , btnText="Visit This"}) {
    // console.log(username)
    return(
        <div className="bg-red-600 text-black p-4 rounded-xl mb-7">
        <h1> Hello friends this is Card {username}</h1>
        <button className="text-white">{btnText}</button>
        </div>
    )
}

export default Card