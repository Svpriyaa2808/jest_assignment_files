import { IQuizSet } from "@/interfaces/interfaces"

type NextBtnProps = {
    gameQuiz : IQuizSet[],
    step:number,
    answer:boolean,
    onClick : ()=>void
}

const NextBtn = ({gameQuiz,step,answer,onClick}:NextBtnProps) => {
    return (
        <div className="flex justify-end m-2">
        <button disabled={!answer}  className="disabled:bg-red-300 disabled:cursor-none bg-red-950 p-2 cursor-pointer"
        onClick={onClick}>{step === gameQuiz.length-1 ? "See result":"Next" }</button>
        </div>
    )
}

export default NextBtn