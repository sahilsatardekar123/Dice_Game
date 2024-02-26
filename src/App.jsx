import { useState } from 'react'
import styled from "styled-components"
import StartGame from './components/StartGame'
import PlayGame from './components/PlayGame'



function App() {
  const [isGameStart, setIsGameStart] = useState(false)
  const toogleBtn = ( ) => {
    setIsGameStart((prev) => prev != !prev)
  }

  return (
    <>
     {
      isGameStart ? <PlayGame/> : <StartGame toogleBtn={toogleBtn}/>
     }
    </>
  )
}

export default App
