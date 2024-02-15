import { useState } from 'react'
import './App.css'

function App() {
  // useState is used to update the value everywhere it is present in the UI
  let [counter, setCounter] = useState(7) // returns an array having counter at 0th index ..

  //let counter = 5

  const addValue = () => {
    if (counter < 20) {
      counter += 1
      setCounter(counter) // can also use thorCounter(counter + 1)
    }
  }

  const subtractValue = () => {
    if (counter > 0) {
      counter -= 1
      setCounter(counter)
    }
  }

  return (
    <>
      <h1> Loki</h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>

      <br />

      <button onClick={subtractValue}>Subtract value</button>
    </>
  )
}

export default App
