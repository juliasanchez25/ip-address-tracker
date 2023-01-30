import { useState } from 'react'
import './styles/index.scss'
import Home from './routes/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
