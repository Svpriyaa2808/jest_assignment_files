'use client'
import { useState } from "react"
import { IQuizSet } from "@/interfaces/interfaces"

type QuizAreaProps = {
    gameQuiz : IQuizSet[],
    step:number,
    answer:boolean,
    onClick : (index:number)=>void
}

const QuizArea = ({gameQuiz,step,answer,onClick}:QuizAreaProps) => {
   
     
    const handleAnsClass = (index: number) => {
        if(answer){
            return index === gameQuiz[step].answer ? "correct" :  "wrong"     
        }else {
            return 'idle'
        }     
    }
    return (
        <div>
            <h3  className="m-2">{gameQuiz[step].question}</h3>
            <div className="border-y-2 border-white">
                {gameQuiz[step].alternatives.map((item,index)=>
                <li key={index}  data-testid="alternative-item" className={`${handleAnsClass(index)} border-2 border-white m-2 text-center list-none`} >
                    <button disabled={answer} onClick={()=>onClick(index)}
                        className={` disabled:cursor-none cursor-pointer m-2 p-2`}>{item}</button></li>)}
            </div>
           
        </div>
    )
}

export default QuizArea

