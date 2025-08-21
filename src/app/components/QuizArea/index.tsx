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

     const handleAnsClass = (index: number) => {
        if(answer){
             return index === gameQuiz[step].answer ? "correct" : "wrong";
        }else {
            return 'idle'
        }
    }

    return (
        <div>
            <h3>{gameQuiz[step].question}</h3>
            <div>
                {gameQuiz[step].alternatives.map((item,index)=>
                <li key={index}  data-testid="alternative-item" className={`${handleAnsClass(index)}`} >
                    <button disabled={answer} onClick={onClick}
                        className={` disabled:cursor-not-allowed cursor-pointer  `}>{item}</button></li>)}
            </div>
           
        </div>
    )
}

export default QuizArea

