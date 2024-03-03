import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let propObject = {
    key1: 'value1',
    key2: 'value2'
  }
  let propArray = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className="bg-cyan-200	 text-amber-700 p-4 rounded-xl">
        Tailwind test
      </h1>
      {/* <Card channel="Object Value" objProp = {propObject} arrProp={propArray} username = "thor"/> */}
      <Card />
      <Card username="Thor" knownAs="God of Thunder" />
      <Card username="Hela" knownAs="God of Death" />
    </>
  )
}

export default App
