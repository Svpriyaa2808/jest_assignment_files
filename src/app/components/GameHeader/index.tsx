const GameHeader = ({player}:{player:string}) => {
    return (
        <div className="text-center">
            <h3 className="font-bold text-[20px] text-center m-2">Coffee Quiz</h3>
            <div className="flex justify-center m-4 text-[20px]">
                <p>Player: </p>
                <p className="mx-2">{player}</p>
            </div>
        </div>
    )
}

export default GameHeader