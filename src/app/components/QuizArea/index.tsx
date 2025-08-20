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
    const[answerClass,setanswerClass] = useState<string>('idle')
    const handleClick = (index:number) => {  
        onClick();    
         return index === gameQuiz[step].answer ? setanswerClass("correct") : setanswerClass("wrong");
    }

    const handleAnsClass = (index: number) => {
        return index === gameQuiz[step].answer ? "correct" : "wrong";
    }

    return (
        <div>
            <h3>{gameQuiz[step].question}</h3>
            <div>
                {gameQuiz[step].alternatives.map((item,index)=>
                <li key={index}  data-testid="alternative-item"  className={`${answerClass}`}>
                    <button disabled={answer} onClick={()=>handleClick(index)}
                        className="disabled:bg-amber-50 bg-amber-200">{item}</button></li>)}
            </div>
           
        </div>
    )
}

export default QuizArea