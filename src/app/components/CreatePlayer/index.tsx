'use client'
import { useState } from "react"

const CreatePlayer = () => {
    const [inputValue,setInputValue] = useState<string>("")

    return (
        <div>
          <fieldset>
            <label htmlFor="user-input">Pick a name</label>
            <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} placeholder="your name"></input>
            </fieldset>
            <button>start game</button>
        </div>
    )
}

export default CreatePlayer