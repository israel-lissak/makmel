import { useState } from 'react'
import './App.css'

function App() {

  const [clicked, setClicked] = useState<boolean>(false)

  if (clicked) {
    return<h1>
    מקמל הומו
  </h1> ;
  }
  


  return (
    <>
      <button onClick={() => {
        setClicked(true)
      }}>תלחץ פה זריז</button>
    </>
  )
}

export default App
