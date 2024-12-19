import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Naming from './components/Naming'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/naming' element={<Naming />} />
        <Route path='/api' element={<Api />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App
