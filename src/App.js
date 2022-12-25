import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="*" element={<Home />} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App