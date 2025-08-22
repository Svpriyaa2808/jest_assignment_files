type ResultProps = {
    rightAnswers : number,
    amountOfAnswers : number,
    onClick : () => void
}

const Result = ({rightAnswers,amountOfAnswers,onClick}:ResultProps) => {
    return (
        <div data-testid="result" className="bg-[#cd5359] py-4 text-center">
            <p>{`${rightAnswers} of ${amountOfAnswers} right answers!`}</p>
            <button onClick={onClick} className=" bg-red-950 p-2 cursor-pointer m-2">Play again</button> 
        </div>
    )
}

export default Result