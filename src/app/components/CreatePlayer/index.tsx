'use client'
import { useState } from "react"

const CreatePlayer = () => {
    const [inputValue,setInputValue] = useState<string>('')
    
    return (
        <div>
          <fieldset>
            <label htmlFor="user-input">Pick a name</label>
            <input value={inputValue} id="user-input" maxLength={15} onChange={(event)=>setInputValue(event.target.value)} placeholder="your name"/>
            </fieldset>
            <button disabled={(inputValue.length < 3)} className="bg-amber-200 disabled:bg-amber-50">start game</button>
        </div>
    )
}

export default CreatePlayer