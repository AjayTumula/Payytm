import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        {/* <Route path='/signin' element={}/>
        <Route path='/dashboard' element={}/>
        <Route path='/send' element={}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
