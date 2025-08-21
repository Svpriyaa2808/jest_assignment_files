'use client'
import GameHeader from "../GameHeader"
import NextBtn from "../NextBtn"
import ProgressBar from "../ProgressBar"
import QuizArea from "../QuizArea"
import { gameQuiz } from "@/data/data"
import { useState } from "react"
import Result from "../Result"

const GameBoard = ({player}:{player:string}) => {
    const[answered,setAnswered] = useState<boolean>(false)
    const[step,setStep]=useState<number>(0)
     const[correctAnswers,setCorrectAnswers]=useState<number>(0) //for correct answers

    const handleStep = () => { //fn for next btn
        setStep(step+1);
        setAnswered(false)
        
        console.log(step)     
    }
    
    const handleAnswer = (index:number) => { //fn for disabling btn after selecting one answer
        setAnswered(true) 
        if(index === gameQuiz[step].answer){
            setCorrectAnswers(correctAnswers+1)
        }
    }

    const handleNewGame = () => {
        setStep(0);
        setAnswered(false)
        setCorrectAnswers(0)
    }

    console.log(answered)
    console.log(correctAnswers)
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
        {step === gameQuiz.length && 
        <>
        <Result  rightAnswers={correctAnswers} amountOfAnswers={gameQuiz.length} onClick={handleNewGame}/>
        
        </>}
        </main>
    )
}

export default GameBoard