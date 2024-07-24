import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Info from './components/info'
import Header from './header/header'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
