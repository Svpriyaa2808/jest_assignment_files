'use client'
import GameHeader from "../GameHeader"
import ProgressBar from "../ProgressBar"
import QuizArea from "../QuizArea"
import { gameQuiz } from "@/data/data"
import { useState } from "react"

const GameBoard = ({player}:{player:string}) => {
    const[rightAnswer,setRightAnswer] = useState<boolean>(false)
    const[step,setStep]=useState<number>(0)

    const answer = () => {
        setRightAnswer(true)
    }

    const handleStep = () => {
        setStep(step+1);
        console.log(step)     
    }
    
    return (
        <>
        <header>
        <GameHeader player={player}/>
        <ProgressBar />
        </header>
        {step < gameQuiz.length && 
        <QuizArea gameQuiz={gameQuiz} step={step} onClick={handleStep} />
        }
        {step === gameQuiz.length && <button>Play Again</button>}
        </>
    )
}

export default GameBoard