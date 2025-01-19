import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Products from './components/hero/Products.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <>
     <Header/>
     <Products/>
     <Footer/>
    </>
  )
}

export default App
