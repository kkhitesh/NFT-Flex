import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* Login */}
    <Login />
    {/* Home */}
    </div>
  )
}

export default App
