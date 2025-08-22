'use client'
import { useState } from "react";
import CreatePlayer from "./components/CreatePlayer";
import GameBoard from "./components/GameBoard";

export default function Home() {
  const[playerName,setPlayerName] = useState<string>('')
  const [gameStart,setGameStart] = useState<boolean>(false)
 

  const handleGame = (name:string) => {
    setGameStart(true) 
    setPlayerName(name)
  }
  
  return (
    <div className="grow m-4 flex flex-col justify-center items-center text-white ">
      <div className="bg-[#CA1551] w-[400px] min-h-[400px] shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)]">
        {!gameStart && 
          <CreatePlayer setPlayer={handleGame}/>
        }
        
        {gameStart && 
          <GameBoard player={playerName} />
        }
      </div>
    </div>
  );
}
