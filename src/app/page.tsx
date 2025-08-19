'use client'
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import CreatePlayer from "./components/CreatePlayer";
import GameHeader from "./components/GameHeader";

export default function Home() {
  const[playerName,setPlayerName] = useState<string>('')
  const [gamestart,setGameStart] = useState<boolean>(false)
  const [inputValue,setInputValue] = useState<string>('')

  const handleGame = () => {
    setGameStart(true) 

  }
  
  return (
    <>
    {!gamestart && 
    <CreatePlayer setPlayer={handleGame}/>}
    {gamestart && 
    <GameHeader player="tobias"/>
}
    </>
  );
}
