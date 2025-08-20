'use client'
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import CreatePlayer from "./components/CreatePlayer";
import GameHeader from "./components/GameHeader";
import ProgressBar from "./components/ProgressBar";
import GameBoard from "./components/GameBoard";

export default function Home() {
  const[playerName,setPlayerName] = useState<string>('')
  const [gameStart,setGameStart] = useState<boolean>(false)
 

  const handleGame = (name:string) => {
    setGameStart(true) 
    setPlayerName(name)
  }
  
  return (
    <>
    {!gameStart && 
    <CreatePlayer setPlayer={handleGame}/>}
    {gameStart && 
    <>
    <GameBoard player={playerName} />
    </>
}
    </>
  );
}
