import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/menu'
import Day from './components/Day'
import Memory from './components/Memory'
import Message from './components/Message'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Menu/>} />
          <Route path="/day" element={<Day/>} />
          <Route path="/memory" element={<Memory/>} />
          <Route path="/message" element={<Message/>} />
          {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
