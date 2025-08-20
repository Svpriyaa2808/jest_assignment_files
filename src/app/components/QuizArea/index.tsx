import { IQuizSet } from "@/interfaces/interfaces"
type QuizAreaProps = {
    gameQuiz : IQuizSet[],
    step:number,
    // answer:boolean,
    onClick : ()=>void
}

const QuizArea = ({gameQuiz,step,onClick}:QuizAreaProps) => {
    return (
        <div>
            <h3>{gameQuiz[step].question}</h3>
            <div>
                {gameQuiz[step].alternatives.map((item,index)=>
                <li key={index}  data-testid="alternative-item"><button onClick={onClick}>{item}</button></li>)}
            </div>
           
        </div>
    )
}

export default QuizArea