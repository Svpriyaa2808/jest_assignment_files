'use client'
import GameHeader from "../GameHeader"
import NextBtn from "../NextBtn"
import ProgressBar from "../ProgressBar"
import QuizArea from "../QuizArea"
import { gameQuiz } from "@/data/data"
import { useState } from "react"

const GameBoard = ({player}:{player:string}) => {
    const[answered,setAnswered] = useState<boolean>(false)
    const[step,setStep]=useState<number>(0)
    

    const handleStep = () => { //fn for next btn
        setStep(step+1);
        setAnswered(false)
        
        console.log(step)     
    }
    
    const handleAnswer = () => { //fn for disabling btn after selecting one answer
        setAnswered(true) 
          
    }

    console.log(answered)
    return (
        <main>
        <header>
        <GameHeader player={player}/>
       
        </header>
        {step < gameQuiz.length && 
        <>
         <ProgressBar gameQuiz={gameQuiz} step={step}/>
        <QuizArea gameQuiz={gameQuiz} step={step} answer={answered} onClick={handleAnswer} />
        <NextBtn gameQuiz={gameQuiz} step={step} answer={answered} onClick={handleStep} />
            </>
        }
        {step === gameQuiz.length && <button>Play Again</button>}
        </main>
    )
}

export default GameBoard