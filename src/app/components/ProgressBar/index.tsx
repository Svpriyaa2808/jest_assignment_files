import { gameQuiz } from "@/data/data"
import { IQuizSet } from "@/interfaces/interfaces"

type ProgressBarProps = {
    gameQuiz:IQuizSet[]
    step : number
}

const ProgressBar = ({gameQuiz,step}:ProgressBarProps) => {
    return (
        <div className="flex">
            <progress className="bg-red-300" value={step} max={gameQuiz.length}>
            
            </progress>
            <p>{`${step} / ${gameQuiz.length}`}</p>
        </div>

    )
}

export default ProgressBar