type ResultProps = {
    rightAnswers : number,
    amountOfAnswers : number,
    onClick : () => void
}

const Result = ({rightAnswers,amountOfAnswers,onClick}:ResultProps) => {
    return (
        <div data-testid="result">
            <p>{`${rightAnswers} of ${amountOfAnswers} right answers!`}</p>
            <button onClick={onClick}>Play again</button> 
        </div>
    )
}

export default Result