import { useState } from 'react'
import FlowerAnimation from './components/FlowerAnimation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <FlowerAnimation />
      <div className="content">
        <h1>Movie Ticket Booking</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
