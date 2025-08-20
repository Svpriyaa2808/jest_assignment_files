'use client'
import { useState } from "react"
import { IQuizSet } from "@/interfaces/interfaces"

type QuizAreaProps = {
    gameQuiz : IQuizSet[],
    step:number,
    answer:boolean,
    onClick : ()=>void
}

const QuizArea = ({gameQuiz,step,answer,onClick}:QuizAreaProps) => {
    // const[btnDisabled,setBtnDisabled] = useState<boolean>(false)

    const handleClick = () => {  
        onClick();    
    }

    return (
        <div>
            <h3>{gameQuiz[step].question}</h3>
            <div>
                {gameQuiz[step].alternatives.map((item,index)=>
                <li key={index}  data-testid="alternative-item">
                    <button disabled={answer} onClick={handleClick}
                        className="disabled:bg-amber-50 bg-amber-200">{item}</button></li>)}
            </div>
           
        </div>
    )
}

export default QuizArea