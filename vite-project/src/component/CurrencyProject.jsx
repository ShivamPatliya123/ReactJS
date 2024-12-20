import React, { useState } from "react";
import CurrencyInputBox from "./CurrencyInputBox1";
import UserCurrencyInfo from "../hook/UseCurrencyinfo";

function CurrencyProject(){
    const[amount,setAmount]= useState(0)
    const[from,setFrom]=useState("usd")
    const[to,setTo] = useState("inr")
    const[convertedAmount,setConvertedAmount]=useState(0)

    const currencyInfo = UserCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = ()=>{
        setConvertedAmount(amount*currencyInfo[to])
    }
    return(
        <div
         className="w-full h-screen flex flex-wrap justify-center itmes-center bg-cover bg-black-200">
            <div className="w-full ">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    convert();
                }}>
                    <div className="w-full mb-1 ">
                    <CurrencyInputBox 
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency)=>setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount)=>setAmount(amount)} 
                     />
                    </div>
                    <div className="relative w-full h-0.5">
                    </div>
                    <button type="button"className="
                        relative left-40
                        border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                        onClick={swap}>
                        swap
                        </button>
                    <div className="w-full mt-1 mb-4">
                        <CurrencyInputBox 
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setTo(currency)}
                        selectCurrency={from}
                        amountDisable
                        />
                    </div>
                    <button  
                    type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                </form>
                </div>
            </div>
        </div> 
    )
}

export default CurrencyProject;