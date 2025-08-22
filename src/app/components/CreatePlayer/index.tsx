'use client'
import { useState } from "react"

const CreatePlayer = ({setPlayer}:{setPlayer:(name:string)=>void}) => {
    const [inputValue,setInputValue] = useState<string>('')
    
    return (
        <div data-testid="createPlayer" className="bg-[#cd5359] py-4 text-center">
            <fieldset >
                <label htmlFor="user-input" className="m-2 text-[18px]">Pick a name</label>
                <input className="border-2 rounded-2xl m-2 p-2" value={inputValue} id="user-input" maxLength={15} onChange={(event)=>setInputValue(event.target.value)} placeholder="your name"/>
            </fieldset>
            <div className="text-center">
                <button disabled={(inputValue.length < 3)} className="bg-red-500 cursor-pointer disabled:bg-red-200 disabled:cursor-none m-2 p-2 rounded-2xl font-bold text-xl" 
                onClick={()=>setPlayer(inputValue)}>start game</button>
            </div>
        </div>
        
    )
}

export default CreatePlayer