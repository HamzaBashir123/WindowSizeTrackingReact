import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [widthCount, setWidthCount] = useState(window.screen.width)
  const [heightCount, setheightCount] = useState(window.screen.height)

const actualWidth = ()=>{
  setWidthCount(window.innerWidth)
}

 useEffect(()=>{
  window.addEventListener("resize", actualWidth)
  return ()=>{
    window.removeEventListener("resize", actualWidth)

  }

 })

 const actualHeight = ()=>{
  setheightCount(window.innerHeight)
}

 
 useEffect(()=>{
  window.addEventListener("resize", actualHeight)
  return ()=>{
    window.removeEventListener("resize", actualHeight)

  }

 })

  return (
    <>
      <p>The Actual Width of the window is :</p>
      <h1>{widthCount}</h1>
      <p>The Actual Height  of the window is :</p>
      <h1>{heightCount}</h1>
    </>
  )
}

export default App
