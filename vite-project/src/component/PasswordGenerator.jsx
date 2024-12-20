import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
function PasswordGenerator(){
    const [length , setlength] = useState(8)
    const [numberAllowed ,setnumberAllowed] = useState(false)
    const [charAllowed ,setcharAllowed] = useState(false)
    const [Password , setpassword] = useState("")

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "~!@#$%^&*_-+{}'[]`"

        for (let i = 1; i < length; i++) {
            let char = Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char)
        }
        setpassword(pass)

    },[length,numberAllowed, charAllowed,setpassword])

    // useEffect Hook

    useEffect(()=>{
        passwordGenerator()
    },
    [length,numberAllowed,charAllowed,passwordGenerator])

    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(Password)
    },[Password])

    // useRef hook
    const passwordRef = useRef(null)

    return(
        <div className=" bg-gray-700  my-8 py-4   shadow-md rounded-xl w-full max-w-md m-80 text-orange-700">
        <h1 className="text-center text-white">Password Generator</h1>
            <div className=" flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text"
                value={Password}
                className="outline-none w-full py-1 px-3"
                placeholder="password" 
                readOnly 
                ref={passwordRef}
                />
                <button
                onClick={copyPasswordToClipboard}
                className="outline-none bg-blue-700 text-white px-3 py-0.5 shink-0">Copy</button>
            </div>
            <div className="flex text-xl gap-x-2">
                <div className="flex item-center gap-x-1">
                    <input type="range"
                    min={6}
                    max={100}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e)=>{setlength(e.target.value)}}
                    />
                    <label >Length:{length}</label>
                </div>
                <div className="flex item-center gap-x-1">
                    <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'
                    onChange={()=>{setnumberAllowed((prev=>!prev));}}
                    />
                    <label >Number:{numberAllowed}</label>
                    </div>

                    <div className="flex item-center gap-x-1">
                    <input type="checkbox"
                    defaultChecked={charAllowed}
                    id='CharecterInput'
                    onChange={()=>{setcharAllowed((prev=>!prev));}}
                    />
                    <label >Charecter:{charAllowed}</label>
                    </div>
                
            </div>
        </div>      
    )

}
export default PasswordGenerator;