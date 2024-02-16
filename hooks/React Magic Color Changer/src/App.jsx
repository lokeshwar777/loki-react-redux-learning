import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor('red')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'red' }}
            >
              BLOOD
            </button>
            <button
              onClick={() => setColor('blue')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'blue' }}
            >
              OCEAN
            </button>
            <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'green' }}
            >
              LEAVES
            </button>
            <button
              onClick={() => setColor('yellow')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'yellow' }}
            >
              SUN
            </button>
            <button
              onClick={() => setColor('cyan')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'cyan' }}
            >
              SKY
            </button>
            <button
              onClick={() => setColor('orange')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'orange' }}
            >
              ORANGE
            </button>
            <button
              onClick={() => setColor('pink')}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: 'pink' }}
            >
              ROSE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
