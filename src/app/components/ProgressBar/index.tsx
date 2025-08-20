import { gameQuiz } from "@/data/data"

const ProgressBar = () => {
    return (
        <div className="flex">
            <progress value="0" max="4"></progress>
            <p>1/{gameQuiz.length}</p>
        </div>

    )
}

export default ProgressBar