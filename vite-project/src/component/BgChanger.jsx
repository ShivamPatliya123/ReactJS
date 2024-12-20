import {useState} from "react";

function Changer(){
    const [color , setColor] = useState("olive")
     
    return(
        <div className = " w-screen h-screen duration-200" 
        style={{backgroundColor:color}}>
            
            <div className=" flex flex-wrap justify-center">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl m-60">
                    <button onClick={()=>setColor("red")}className="bg-red-900 p-3 rounded-xl">RED</button> 
                    <button onClick={()=>setColor("green")} className="bg-green-900 p-3 rounded-xl">green</button> 
                    <button onClick={()=>setColor("yellow")} className="bg-yellow-500 p-3 rounded-xl">yellow</button> 
                    <button onClick={()=>setColor("blue")} className="bg-blue-900 p-3 rounded-xl">blue</button> 
                    <button onClick={()=>setColor("pink")} className="bg-pink-500 p-3 rounded-xl">pink</button> 
                    <button onClick={()=>setColor("black")} className="bg-black text-white p-3 rounded-xl">black</button> 
                </div>
            </div>
        </div>
    )
}

export default Changer