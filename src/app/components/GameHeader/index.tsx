const GameHeader = ({player}:{player:string}) => {
    return (
        <div>
            <h3>Coffee Quiz</h3>
            <div className="flex">
            <p>Player: </p>
            <p>{player}</p>
            </div>
        </div>
    )
}

export default GameHeader