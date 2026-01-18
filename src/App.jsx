import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginScreen from './views/LoginScreen'
import HomeScreen from './views/HomeScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}