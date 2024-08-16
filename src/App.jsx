import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './commons/Header.jsx'
import Footer from './commons/Footer.jsx'
import Inicio from './inicio/Inicio.jsx'
import Nosotros from './nosotros/Nosotros.jsx'
import Productos from './productos/Productos.jsx'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
