import { IQuizSet } from "@/interfaces/interfaces"

type NextBtnProps = {
    gameQuiz : IQuizSet[],
    step:number,
    answer:boolean,
    onClick : ()=>void
}

const NextBtn = ({gameQuiz,step,answer,onClick}:NextBtnProps) => {
    return (
        <button disabled={!answer}  className="disabled:bg-amber-50 bg-amber-200"
        onClick={onClick}>{step === gameQuiz.length-1 ? "See result":"Next" }</button>
    )
}

export default NextBtn