import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Card from './Component/Card'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Card" element={<Card />} />


      </Routes>
    </div>
  )
}