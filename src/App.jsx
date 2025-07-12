import { useState } from 'react'
import './App.css'
import Game from './Game/Game'
import GameBoard from './GameBoard/GameBoard'


function App() {
  

  return (
    <div className="app-container">
      
      <h1>My Wordle</h1>
      <GameBoard />
      
    </div>
  )
}

export default App
