import { IQuizSet } from "@/interfaces/interfaces"

type ProgressBarProps = {
    gameQuiz:IQuizSet[]
    step : number
}

const ProgressBar = ({gameQuiz,step}:ProgressBarProps) => {
    return (
        <div className="flex justify-center">
            <progress className="m-2" value={step} max={gameQuiz.length}> </progress>
            <p className="m-1">{`${step} / ${gameQuiz.length}`}</p>
        </div>
    )
}

export default ProgressBar