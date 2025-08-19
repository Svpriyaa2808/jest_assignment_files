'use client'
import { useState } from "react";
import Image from "next/image";
import CreatePlayer from "./components/CreatePlayer";
import GameHeader from "./components/GameHeader";

export default function Home() {
 
  return (
    <>
    <CreatePlayer />
    <GameHeader player="tobias"/>
    </>
  );
}
